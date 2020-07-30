import { Component, Optional, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'dialog-schedularform',
    templateUrl: 'dialog-schedularform.html',
  })



  export class DialogSchedularForm {

    constructor(
      public dialogRef: MatDialogRef<DialogSchedularForm>) { }
  

      
  
    close() {
      this.dialogRef.close();
    }
  
  }
  