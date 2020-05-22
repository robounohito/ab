import { EditorDirective } from './editor.directive';
import { ElementRef, NgZone } from '@angular/core';

describe('EditorDirective', () => {
  it('should create an instance', () => {
    const directive = new EditorDirective({} as ElementRef, {} as NgZone);
    expect(directive).toBeTruthy();
  });
});
