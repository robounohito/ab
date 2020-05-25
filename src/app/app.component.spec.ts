import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { readToken } from './app.constants';

describe('AppComponent', () => {

  let store: MockStore;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        provideMockStore(),
      ]
    }).compileComponents();
    store = TestBed.inject(Store) as MockStore;
  }));

  it('should create the app', () => {
    spyOn(store, 'dispatch');
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
    expect(store.dispatch).toHaveBeenCalledWith(readToken());
  });

});
