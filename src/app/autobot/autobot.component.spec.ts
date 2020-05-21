import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutobotComponent } from './autobot.component';

describe('AutobotComponent', () => {
  let component: AutobotComponent;
  let fixture: ComponentFixture<AutobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
