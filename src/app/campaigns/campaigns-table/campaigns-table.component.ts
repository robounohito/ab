import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Campaign } from '../campaigns.types';

@Component({
  selector: 'autobound-campaigns-table',
  templateUrl: './campaigns-table.component.html',
  styleUrls: ['./campaigns-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CampaignsTableComponent implements OnInit, OnChanges {

  @Input() data!: Campaign[];
  displayedColumns: string[] = [
    'prospect_name',
    'company_name',
    'activation_date',
    'job_title',
    'current_branch',
    'campaign_name',
    'steps_completed'
  ];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('data' in changes) {
      this.dataSource = new MatTableDataSource(changes.data.currentValue);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
