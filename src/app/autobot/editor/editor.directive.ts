import { Directive, OnDestroy, NgZone, ElementRef, forwardRef } from '@angular/core';
import MultirootEditor from '@ckeditor/ckeditor5-build-multiroot-document';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[autoboundEditor]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => EditorDirective),
    multi: true
  }]
})
export class EditorDirective implements ControlValueAccessor, OnDestroy {

  editor: typeof MultirootEditor;
  isPatchingData = false;
  private onChange!: (data: Record<string, string>) => void;

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
  ) { }

  editorInit(data: Record<string, string>) {
    this.zone.runOutsideAngular(() => {
      MultirootEditor.create(this.createElements(data), {
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList',
          'alignment:left', 'alignment:center', 'alignment:right', 'undo', 'redo'],
        placeholder: {},
      }).then((newEditor: any) => {
        const div = document.createElement('div');
        const toolbar = this.elementRef.nativeElement.appendChild(div);
        toolbar.appendChild(newEditor.ui.view.toolbar.element);
        this.editor = newEditor;
        newEditor.model.document.on('change:data', (event: Record<string, any>) => {
          if (!this.isPatchingData) {
            const rootName = event.source.differ.getChanges()[0]?.position?.root.rootName;
            if (rootName) {
              const currentData = this.editor.getData({ rootName });
              const elem = this.editor.ui.getEditableElement(rootName);
              if (!currentData) {
                newEditor.editing.view.change((writer: Record<string, any>) => {
                  const viewEditableRoot = newEditor.editing.view.domConverter.mapDomToView(elem);
                  writer.setStyle('display', 'none', viewEditableRoot);
                  setTimeout(() => this.onChange(this.getCurrentValue(Object.keys(data))));
                });
              } else if (elem.style.display === 'none') {
                newEditor.editing.view.change((writer: Record<string, any>) => {
                  const viewEditableRoot = newEditor.editing.view.domConverter.mapDomToView(elem);
                  writer.removeStyle('display', viewEditableRoot);
                  setTimeout(() => this.onChange(this.getCurrentValue(Object.keys(data))));
                });
              }
            }
            this.zone.run(() => {
              this.onChange(this.getCurrentValue(Object.keys(data)));
            });
          }
        });
       /*  newEditor.editing.view.document.on('change:isFocused', (event: Record<string, any>, _: any, isFocused: boolean) => {
          if (isFocused) {
            console.log('focused event', event, newEditor.ui.focusTracker.focusedElement);
          }
        }); */
      }).catch((err: any) => {
        console.error(err.stack);
      });
    });
  }

  writeValue(value: Record<string, string>) {
    if (value) {
      if (this.editor) {
        const keys: string[] = Array.from(this.editor.ui.getEditableElementsNames());
        const data: Record<string, string> = keys.reduce((acc, key) => ({
          ...acc,
          [key]: this.editor.getData({ rootName: key })
        }), {});
        keys.forEach(key => {
          const elem = this.editor.ui.getEditableElement(key);
          if (value[key] === undefined) {
            this.editor.editing.view.change((writer: Record<string, any>) => {
              const viewEditableRoot = this.editor.editing.view.domConverter.mapDomToView(elem);
              writer.setStyle('display', 'none', viewEditableRoot);
            });
          } else if (value[key] !== data[key]) {
            this.isPatchingData = true;
            this.editor.setData({ [key]: value[key] });
            if (elem.style.display === 'none') {
              this.editor.editing.view.change((writer: Record<string, any>) => {
                const viewEditableRoot = this.editor.editing.view.domConverter.mapDomToView(elem);
                writer.removeStyle('display', viewEditableRoot);
              });
            }
            this.editor.ui.getEditableElement(key).focus();
            this.isPatchingData = false;
          } else {
            elem.style.display = 'block';
          }
        });
        this.onChange(this.getCurrentValue(keys));
      }
      else {
        this.editorInit(value);
      }
    }
  }

  registerOnChange(callback: (data: Record<string, string>) => void) {
    this.onChange = callback;
  }

  registerOnTouched() { }

  ngOnDestroy() {
    this.editor.destroy()
      .then(() => this.elementRef.nativeElement.textContent = '');
  }

  private createElements(data: Record<string, string>) {
    const keys = Object.keys(data);
    const editorContainerDiv = document.createElement('div');
    editorContainerDiv.className = 'editor-container';
    const editorContainer = this.elementRef.nativeElement.appendChild(editorContainerDiv);
    return keys.reduce((acc, key) => {
      const div = document.createElement('div');
      div.setAttribute('id', key);
      div.innerHTML = data[key];
      const element = editorContainer.appendChild(div);
      return {
        ...acc,
        [key]: element
      };
    }, {});
  }

  private getCurrentValue(
    keys: string[] = Array.from(this.editor.ui.getEditableElementsNames())
  ) {
    return keys.reduce((acc, key) => {
      if (this.editor.ui.getEditableElement(key).style.display !== 'none') {
        return {
          ...acc,
          [key]: this.editor.getData({ rootName: key })
        };
      } else {
        return acc;
      }
    }, {});
  }

}
