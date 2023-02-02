import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts=[
    {
      title:"Mountain",
      imageUrl:"assets/biking.jpeg",
      username:"abc",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti sed unde nostrum. Nam veniam dolorum vitae at repudiandae esse?"
    },
    {
      title:"climbing",
      imageUrl:"assets/mountain.jpeg",
      username:"abc",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti sed unde nostrum. Nam veniam dolorum vitae at repudiandae esse?"
    }
  ]


}
