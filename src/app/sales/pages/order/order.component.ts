import {Component} from '@angular/core';
import {Color, Hero} from "../../interfaces/sales.interfaces";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  isUppercase: boolean = false;
  orderBy: string = '';

  heroes: Hero[] = [
    {
      name: 'Superman',
      flies: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      flies: false,
      color: Color.black
    },
    {
      name: 'Robin',
      flies: false,
      color: Color.green
    },
    {
      name: 'Dardevil',
      flies: false,
      color: Color.red
    },
    {
      name: 'Green Lantern',
      flies: true,
      color: Color.green
    },
  ];

  toggleUppercase() {
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value:string) {
    this.orderBy = value;
  }

}
