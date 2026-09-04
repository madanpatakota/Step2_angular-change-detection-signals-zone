import { Component } from '@angular/core';
import { DefaultChild } from './default-child/default-child';
import { OnpushChild } from './onpush-child/onpush-child';

@Component({
  selector: 'app-root',
  imports: [DefaultChild, OnpushChild],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  employee = {
    name: 'Madan',
    department: 'Angular',
  };

  // Only property changes.
  // Object reference stays the SAME.
  changeSameObject() {
    this.employee.name = 'John';
  }

  // Creates a NEW object.
  // Object reference changes.
  changeNewObject() {
    this.employee = {
      ...this.employee,
      name: 'Robert',
    };
  }
}