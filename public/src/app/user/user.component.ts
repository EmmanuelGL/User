import { Component, OnInit } from '@angular/core';


import { UserService } from './user.service';
import { User } from './user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [
    // new User(1, 'jose', 'alcatara', 'jose@gmail.com'),
    // new User(2, 'jose', 'alcatara', 'jose@gmail.com'),
    // new User(3, 'jose', 'alcatara', 'jose@gmail.com')
  ];


  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  // metodos 
  getUsers() {
    this._userService.getUsers()
      .then(users => this.users = users)
      .catch(err => console.log(err));
  }

  create(user: User){
    console.log(user)
    // lo agregamos al arrreglo que generamos 
    // this.users.push(user);
    this._userService.create(user)
      .then(status => this.getUsers())
      .catch(err => console.log(err));
  }

  destroy(user: User) {
    // lo removemos del arreglo
    // const i = this.users.indexOf(user);
    // this.users.splice(i,1)
    // console.log('si entra'+ JSON.stringify(user)+'----'+JSON.stringify(this.users))
    this._userService.destroy(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err));
  }

  // update(user) {
  //   // console.log(user)
  //   // const i = this.users.indexOf(users.original);
  //   // this.users[i] = users.edited;
  //   this._userService.update(user)
  //   .then(status => this.getUsers())
  //   .catch(err => console.log(err));
  // }
  update(user: User) {
    this._userService.update(user)
    .then(status => this.getUsers())
    .catch(err => console.log(err));
  }

}
