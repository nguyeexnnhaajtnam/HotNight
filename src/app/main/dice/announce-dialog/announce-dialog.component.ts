import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-announce-dialog',
  templateUrl: './announce-dialog.component.html',
  styleUrls: ['./announce-dialog.component.scss']
})
export class AnnounceDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AnnounceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }
  onClose(){
    this.dialogRef.close();
  }
}
