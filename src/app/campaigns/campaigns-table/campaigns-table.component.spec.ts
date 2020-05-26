import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CampaignsTableComponent } from './campaigns-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

describe('CampaignsTableComponent', () => {

  let component: CampaignsTableComponent;
  let fixture: ComponentFixture<CampaignsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CampaignsTableComponent],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
