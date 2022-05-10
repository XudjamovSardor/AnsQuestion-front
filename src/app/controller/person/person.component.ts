import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/person';
import { Role } from 'src/app/model/role';
import { UserService } from 'src/app/service/user.service';
export interface TableModel {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss', "../../../assets/spriler.style.scss"]
})


export class PersonComponent implements OnInit {
  userlar!: User[];
  isLodingResult = false;
  userSon: number = 0
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loader('');

  }

  loader(key: any) {
    this.isLodingResult = true;
    let params = {
      key: key
    }
    this.userService.getAll(params).subscribe(data => {
      this.userlar = data
      this.isLodingResult = false
      this.userSon = data.length
    },
      error => {
        this.isLodingResult = false
      })
  }
  deletById(id: number) {
    this.isLodingResult = true
    try {
      this.userService.delete(id).subscribe(data => {
        this.loader('')
        this.isLodingResult = false
      });
    } catch (error) {
      throw new Error("I don't find ID");
    }
  }

  changeRole(user: User) {
    this.isLodingResult = true

    if (user.role.toString() == "ADMIN") {
      user.role = Role.USER
    } else {
      user.role = Role.ADMIN
    }

    this.userService.update(user).subscribe(data => {
      this.isLodingResult = false
      this.loader('')
    })
  }


  refresh() {
    this.loader('')
  }
  displayedColumns: string[] = ["id", "first_name", "last_name", "email", "password", "registDate", "role", "vazifalar"]; // For Table
}
