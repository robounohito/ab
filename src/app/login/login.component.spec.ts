import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DebugElement } from '@angular/core';

describe('LoginComponent', () => {

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let page: { [key: string]: HTMLInputElement };

  const pageObject = (de: DebugElement): { [key: string]: HTMLInputElement } => ({
    get header() { return de.nativeElement.querySelector('h3'); },
    get email() { return de.nativeElement.querySelector('#email'); },
    get password() { return de.nativeElement.querySelector('#password'); },
    get passwordButton() { return de.nativeElement.querySelector('.form-field button'); },
    get rememberMe() { return de.nativeElement.querySelector('input[type="checkbox"]'); },
    get login() { return de.nativeElement.querySelector('button'); },
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        MatCheckboxModule
      ],
      providers: [
        { provide: Store, useValue: { select: () => of({ error: 'error' }) } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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

  it('should validate password', () => {
    expect(component.form.controls.password.valid).toEqual(false);
    page.password.value = '1234567';
    page.password.dispatchEvent(new Event('input'));
    expect(component.form.controls.password.valid).toEqual(true);
    page.password.value = '123456';
    page.password.dispatchEvent(new Event('input'));
    expect(component.form.controls.password.valid).toEqual(false);
  });

  it('should switch Remember me checkbox', () => {
    expect(component.form.controls.rememberMe.value).toEqual(false);
    page.rememberMe.click();
    fixture.detectChanges();
    expect(component.form.controls.rememberMe.value).toEqual(true);
  });

  it('should switch visibility of password', () => {
    expect(page.password.type).toEqual('password');
    page.passwordButton.click();
    fixture.detectChanges();
    expect(page.password.type).toEqual('text');
  });

  it('should populate form on valid submit', () => {
    page.email.value = 'email@email.com';
    page.email.dispatchEvent(new Event('input'));
    page.password.value = 'password';
    page.password.dispatchEvent(new Event('input'));
    expect(component.form.value).toEqual({
      email: 'email@email.com',
      password: 'password',
      rememberMe: false,
    });
  });

});
