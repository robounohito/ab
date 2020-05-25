import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetComponent } from './reset.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DebugElement } from '@angular/core';
import SpyObj = jasmine.SpyObj;
import { reset } from '../login.constants';
import { LoginTemplateComponent } from '../login-template/login-template.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResetComponent', () => {

  let component: ResetComponent;
  let fixture: ComponentFixture<ResetComponent>;
  let page: { [key: string]: HTMLInputElement };
  let storeSpy: SpyObj<Store>;

  const pageObject = (de: DebugElement): { [key: string]: HTMLInputElement } => ({
    get header() { return de.nativeElement.querySelector('h3'); },
    get email() { return de.nativeElement.querySelector('#email'); },
    get code() { return de.nativeElement.querySelector('#code'); },
    get password() { return de.nativeElement.querySelector('#password'); },
    get passwordButton() { return de.nativeElement.querySelector('.form-field button'); },
    get reset() { return de.nativeElement.querySelector('button.large'); },
  });

  beforeEach(async(() => {

    storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    storeSpy.select.and.returnValue(of({ error: 'error' }));

    TestBed.configureTestingModule({
      declarations: [LoginTemplateComponent, ResetComponent],
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
    fixture = TestBed.createComponent(ResetComponent);
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

  it('should validate recovery code', () => {
    expect(component.form.controls.code.valid).toEqual(false);
    page.code.value = 'code';
    page.code.dispatchEvent(new Event('input'));
    expect(component.form.controls.code.valid).toEqual(true);
  });

  it('should validate password', () => {
    expect(component.form.controls.password.valid).toEqual(false);
    page.password.value = '1234567';
    page.password.dispatchEvent(new Event('input'));
    expect(component.form.controls.password.valid).toEqual(true);
    page.password.value = '123456';
    page.password.dispatchEvent(new Event('input'));
    expect(component.form.controls.password.valid).toEqual(false);
  });

  it('should switch visibility of password', () => {
    expect(page.password.type).toEqual('password');
    page.passwordButton.click();
    fixture.detectChanges();
    expect(page.password.type).toEqual('text');
  });

  it('should populate form on valid submit', () => {
    storeSpy.select.and.returnValue(of({ error: '' }));
    page.email.value = 'email@email.com';
    page.email.dispatchEvent(new Event('input'));
    page.code.value = 'code';
    page.code.dispatchEvent(new Event('input'));
    page.password.value = 'password';
    page.password.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const result = {
      email: 'email@email.com',
      password: 'password',
      code: 'code',
    };
    expect(component.form.value).toEqual(result);
    page.reset.click();
    expect(storeSpy.dispatch).toHaveBeenCalledWith(reset({
      payload: {
        email: result.email,
        password: result.password,
        recoveryCode: result.code,
      }
    }));
  });

});
