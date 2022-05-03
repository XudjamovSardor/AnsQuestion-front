import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { User } from "../model/person";

@Component({

  template: `
        <h1 matDialogContent>User</h1>
        <mat-dialog-content>
            ID: {{user.id}}
        </mat-dialog-content>
        <hr>
        <mat-dialog-content>
            First Name: {{user.firstName}}
        </mat-dialog-content>
        <hr>
        <mat-dialog-content>
            LastName: {{user.lastName}}
        </mat-dialog-content>
        <hr>
        <mat-dialog-content>  
            Email: {{user.email}}
        </mat-dialog-content>
        <hr>
        <mat-dialog-content>  
            Role: {{user.role}}
        </mat-dialog-content>
        <hr>
        <mat-dialog-content>  
            RegistDate: {{user.registDate}}
        </mat-dialog-content>
        <hr>
        <mat-dialog-actions>
            <button mat-raised-button color="primary" matDialogClose>Close</button>            
        </mat-dialog-actions>
    `
})
export class InfoDialogComponent {
  user!: any
  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: any },
  ) {
    this.user = data.user
    console.log(data.user);
    
  }

  ok() {
    this.dialogRef.close(true);
  }
}