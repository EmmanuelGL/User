import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from "../user";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  @Input() user: User;
  // instancia del usuario
  editUser: User = new User;
  @Output() updateUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    // objeto de la clase assign que se encargara de actualizar un objeto
    Object.assign(this.editUser, this.user);
  }
  update(){
    // console.log('si entra')
    this.editUser.editable= false;
    // this.updateUserEvent.emit({
    //   original :this.user,
    //   edited : this.editUser})
    this.updateUserEvent.emit(this.editUser)
  }
}
