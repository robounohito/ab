import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutobotComponent } from './autobot.component';
import { Store } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from './editor/editor.component';
import { EditorDirective } from './editor/editor.directive';

describe('AutobotComponent', () => {

  let component: AutobotComponent;
  let fixture: ComponentFixture<AutobotComponent>;

  beforeEach(async(() => {
    const storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    TestBed.configureTestingModule({
      declarations: [
        AutobotComponent,
        EditorComponent,
        EditorDirective
      ],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: Store, useValue: storeSpy }
      ]
    }).compileComponents();
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
