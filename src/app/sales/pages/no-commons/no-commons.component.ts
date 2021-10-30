import {Component} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent{
  // i18nSelect
  name: string = 'Gerard';
  gender: string = 'male';

  invitationMap = {
    'male': 'Mr.',
    'female': 'Ms.'
  }

  // i18nPlural
  clients: string[] = ['Meri', 'Gerard', 'Rocky', 'Jordi', 'Maria'];
  clientsMap = {
    '=0': 'no clients are waiting.',
    '=1': 'one client is waiting.',
    'other': '# clients are waiting.'
  }

  changeClient() {
    if(this.name === 'Gerard') {
      this.name = 'Meri';
      this.gender = 'female';
    } else {
      this.name = 'Gerard';
      this.gender = 'male';
    }
  }

  deleteClient() {
    this.clients.pop();
  }

  // KeyValue Pipe
  person = {
    name:'Gerard',
    age: 26,
    address: 'El Catllar, Tarragona'
  }

  // JsonPipe
  heroes = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Aquaman',
      fly: false
    },
    {
      name: 'Robin',
      fly: false
    },
  ]

  //Async Pipe
  myObservable = interval(2000); // 0,1,2,3,4,5....
  promiseValue = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise end');
    }, 3500);
  });

}
