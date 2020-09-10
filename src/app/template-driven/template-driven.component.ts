import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  //new instance of the class
  model = new User(5, 'user123@gmail.com', 'passik123');
  ngOnInit() { }

  //clear form and can enter new data for user
  newUser() {
    this.model = new User(14, '', '');
  }
  //submitted - false to default data and then change on true
  submitted = false;

  //submit form
  onSubmit() {
    this.submitted = true;
    console.log('Form was submitted!');
  }
}
