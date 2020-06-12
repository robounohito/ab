import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginTemplateComponent } from './login-template.component';
import { Component, DebugElement } from '@angular/core';

@Component({
  template: `<ab-login-template>Test</ab-login-template>`
})
export class TestComponent { }

fdescribe('LoginTemplateComponent', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let page: { [key: string]: HTMLInputElement };

  const pageObject = (de: DebugElement): { [key: string]: HTMLInputElement } => ({
    get projection() { return de.nativeElement.querySelector('.content'); },
    get footer() { return de.nativeElement.querySelector('.footer'); },
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTemplateComponent, TestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    page = pageObject(fixture.debugElement);
  });

  it('should be created and contain a projection', () => {
    expect(component).toBeTruthy();
    expect(page.projection.textContent).toEqual('Test');
  });

  it('should display current year in a footer', () => {
    expect(page.footer.textContent)
    .toContain(new Date().getFullYear().toString());
  });

});
