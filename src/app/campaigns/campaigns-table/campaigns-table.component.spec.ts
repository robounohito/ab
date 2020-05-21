import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsTableComponent } from './campaigns-table.component';

describe('CampaignsTableComponent', () => {
  let component: CampaignsTableComponent;
  let fixture: ComponentFixture<CampaignsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignsTableComponent ]
    })
    .compileComponents();
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
