import {Component} from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {
  lowerName: string = 'gerard';
  upperName: string = 'GERARD';
  completeName: string = 'GerArD mArtI';

  date: Date = new Date();
}
