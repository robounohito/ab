import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'ab-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditorComponent>,
  ) { }

  click() {
    this.dialogRef.close();
    this.data.cb('whatever');
  }

  ngOnInit() { }

}
