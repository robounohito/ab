import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ab-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      content: string,
      confirmText: string,
      onConfirmCb: () => void,
    },
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    public sanitizer: DomSanitizer,
  ) { }

  confirmationClick() {
    this.data.onConfirmCb();
    this.dialogRef.close();
  }

}
