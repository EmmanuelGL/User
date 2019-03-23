import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users;
  @Output() destroyUserEvent = new EventEmitter();
  @Output() updateUserEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  // eventos 
  destroy(user: User){
    
    const response = confirm('delete?')
    if(response) {
      
    // eliminar en el arreglo
    this.destroyUserEvent.emit(user);
    //   this.destroyUserEvent.emit(user);      
    }
  }
  // update(user: User) {
  //   this.updateUserEvent.emit(user);
  // }
  update(user: User) {
    this.updateUserEvent.emit(user);
  }

}
