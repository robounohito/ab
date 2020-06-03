import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { Store } from '@ngrx/store';
import { ApiService } from '../_core/api/api.service';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import SpyObj = jasmine.SpyObj;
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NavbarComponent', () => {

  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let page: { [key: string]: HTMLInputElement };
  let storeSpy: SpyObj<Store>;

  const pageObject = (de: DebugElement): { [key: string]: HTMLInputElement } => ({
    get callout() { return de.nativeElement.querySelector('.callout'); },
    get image() { return de.nativeElement.querySelector('.photo > img'); },
  });

  beforeEach(async(() => {

    storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    storeSpy.select.and.returnValue(of({ contactsToCall: 1, image: 'favicon.ico' }));

    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['request', 'endpoint', 'getAttachment']);
    apiServiceSpy.getAttachment.and.callFake((id: string) => id);

    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        MatMenuModule,
        NoopAnimationsModule,
        RouterTestingModule,
        MatTooltipModule,
        MatIconModule,
      ],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    page = pageObject(fixture.debugElement);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display contacts to call', () => {
    expect(page.callout.textContent).toEqual(' 1 ');
  });

  it('should display user\'s image', () => {
    expect(page.image.src).toContain('favicon.ico');
  });

});
