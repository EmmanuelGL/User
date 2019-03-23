import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  // creamos nuestro evento de salida conn la importacion de @output y eventemitter el escucha
  @Output() createNewUserEvent = new EventEmitter();
  newUser = new User;

  constructor() { }

  ngOnInit() {
  }

  create() {
    // emitimos los datos de la siguiente manera 
    this.createNewUserEvent.emit(this.newUser);
    //limpia los campos del formulario crea una nueva instacia del objeto
    this.newUser = new User();
  }
}
