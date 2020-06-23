import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPersonaComponent } from './empty-persona.component';

describe('EmptyPersonaComponent', () => {
  let component: EmptyPersonaComponent;
  let fixture: ComponentFixture<EmptyPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
