import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  PageIndex(index:number){
    return Math.abs(this.currentPage - index);
  }

  images = [
    {
      title:"View-1",
      url:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9757d496-239b-46c5-baea-6873cbfe9b3d/dfnczuw-a84d083d-c7f0-4e12-9fb5-1b0ad799f9d3.jpg/v1/fill/w_622,h_350,q_70,strp/highrise_paradise_by_joeyjazz_dfnczuw-350t.jpg"
    },
    {
      title:"View-2",
      url:"https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg"
    },
    {
      title:"View-3",
      url:"https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-thumb.jpg"
    }
  ]

}
