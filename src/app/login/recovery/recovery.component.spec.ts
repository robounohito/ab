import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoveryComponent } from './recovery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DebugElement } from '@angular/core';
import SpyObj = jasmine.SpyObj;
import { recovery } from '../login.constants';
import { LoginTemplateComponent } from '../login-template/login-template.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

describe('RecoveryComponent', () => {

  let component: RecoveryComponent;
  let fixture: ComponentFixture<RecoveryComponent>;
  let page: { [key: string]: HTMLInputElement };
  let storeSpy: SpyObj<Store>;

  const pageObject = (de: DebugElement): { [key: string]: HTMLInputElement } => ({
    get header() { return de.nativeElement.querySelector('h3'); },
    get email() { return de.nativeElement.querySelector('#email'); },
    get recovery() { return de.nativeElement.querySelector('button.large'); },
  });

  beforeEach(async(() => {

    storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    storeSpy.select.and.returnValue(of({ error: 'error' }));

    TestBed.configureTestingModule({
      declarations: [LoginTemplateComponent, RecoveryComponent],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatIconModule,
      ],
      providers: [
        { provide: Store, useValue: storeSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    page = pageObject(fixture.debugElement);
  });

  it('should be created with error and form invalid', () => {
    expect(component).toBeTruthy();
    expect(page.header.innerText).toEqual('error');
    expect(component.form.valid).toBeFalsy();
  });

  it('should validate email', () => {
    expect(component.form.controls.email.valid).toEqual(false);
    page.email.value = 'test@test.com';
    page.email.dispatchEvent(new Event('input'));
    expect(component.form.controls.email.valid).toEqual(true);
    page.email.value = 'test@';
    page.email.dispatchEvent(new Event('input'));
    expect(component.form.controls.email.valid).toEqual(false);
  });

  it('should populate form on valid submit', () => {
    storeSpy.select.and.returnValue(of({ error: '' }));
    page.email.value = 'email@email.com';
    page.email.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const result = { email: 'email@email.com', };
    expect(component.form.value).toEqual(result);
    page.recovery.click();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(recovery({
      payload: {
        ...result,
        recoveryType: 'email',
      }
    }));
  });

});
