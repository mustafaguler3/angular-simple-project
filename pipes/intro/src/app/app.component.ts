import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = "";
  date = "";
  money: number = 0;
  heigth = "";
  persons= {
    name:"m",
    point:"170"
  }

  onHeightChange(value:string){
    this.heigth = value;
  }

  onMoneyChange(value:string){
    this.money = parseFloat(value);
  }

  onNameChange(value:string){
    this.name = value;
  }

  onDateChange(value:string){
    this.date = value;
  }
}
