import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

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
            <button mat-raised-button color="warn" routerLink="/user" matDialogClose>Users</button>           
        </mat-dialog-actions>
    `
})

export class UserInfoDialogComponent {
  user!: any
  constructor(
    public dialogRef: MatDialogRef<UserInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: any },
  ) {
    this.user = data.user
  }
}



@Component({
  template: `
    <h1 matDialogContent>IMG</h1>

    <mat-dialog-content>
      <img src="{{img.questionPhoto}}" width="400" height="400" alt="">
    <mat-dialog-content>
    <mat-dialog-actions>
        <button mat-raised-button color="primary" matDialogClose>Close</button>
        <button mat-raised-button color="warn"><a style="color: white; text-decoration: none;" href="{{img.questionPhoto}}" target="_blank">Full Image</a></button>
    </mat-dialog-actions>
  `
})
  
export class ImgDialogComponent {
  img!: any
  constructor(
    public dialogRef: MatDialogRef<UserInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { img: any },
  ) {
    this.img = data.img
  }
}



@Component({
  template: `
  <h1 matDialogContent>Subject Info</h1>

  <mat-dialog-content>
    ID: {{sub.id}}
  </mat-dialog-content>
        <hr>
  <mat-dialog-content>
    Name: {{sub.name}}
  </mat-dialog-content>
        <hr>
  <mat-dialog-content>
    Subject Levl: {{sub.subjectLevl}}
  </mat-dialog-content>
        <hr>
  <mat-dialog-content>
    Info: {{sub.info}}
  </mat-dialog-content>

  <mat-dialog-actions>
        <button mat-raised-button color="primary" matDialogClose>Close</button>
        <button mat-raised-button color="warn" routerLink="/subject">Subjects</button>
    </mat-dialog-actions>

  `
})

export class SubjectDialogComponent {
  sub!: any
  constructor(
    public dialogRef: MatDialogRef<UserInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { sub: any },
  ) {
    this.sub = data.sub
  }
}