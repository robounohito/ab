import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaContactsComponent } from './personas-contacts.component';

describe('PersonaContactsComponent', () => {

  let component: PersonaContactsComponent;
  let fixture: ComponentFixture<PersonaContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaContactsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
