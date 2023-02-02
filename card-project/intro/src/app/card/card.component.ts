import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title:string = "";
  @Input() imageUrl:string = "";
  @Input() username:string = "";
  @Input() content:string = "";
}
