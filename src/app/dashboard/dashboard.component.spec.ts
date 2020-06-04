import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { Store } from '@ngrx/store';
import SpyObj = jasmine.SpyObj;
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Outreach, loadDashboard } from './dashboard.constants';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatSelectHarness } from '@angular/material/select/testing';

describe('DashboardComponent', () => {

  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let page: { [key: string]: HTMLInputElement };
  let storeSpy: SpyObj<Store>;
  let loader: HarnessLoader;

  const pageObject = (de: DebugElement): { [key: string]: HTMLInputElement } => ({
    get emailsSent() { return de.nativeElement.querySelector('.block > h1'); },
    get selectTrigger() { return de.nativeElement.querySelector('.mat-select'); },
    get selectOptions() { return de.nativeElement.querySelectorAll('.mat-select-panel mat-option'); },
  });

  beforeEach(async(() => {

    storeSpy = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    storeSpy.select.and.returnValue(of({ total_email: '1' }));

    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        FontAwesomeModule,
        MatSelectModule
      ],
      providers: [
        { provide: Store, useValue: storeSpy },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    page = pageObject(fixture.debugElement);
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create component with proper initial data', () => {
    expect(component).toBeTruthy();
    expect(page.emailsSent.textContent).toEqual('1');
    expect(storeSpy.dispatch).toHaveBeenCalledWith(
      loadDashboard({ selectedOutreach: Outreach.all })
    );
  });

  it('should dispatch loadDashboard on select change event', async () => {
    const select = await loader.getHarness(MatSelectHarness);
    await select.open();
    await select.clickOptions({ text: 'Daily' });
    expect(storeSpy.dispatch).toHaveBeenCalledWith(
      loadDashboard({ selectedOutreach: Outreach.daily })
    );
  });

});
