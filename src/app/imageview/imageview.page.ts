import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.page.html',
  styleUrls: ['./imageview.page.scss'],
})
export class ImageviewPage implements OnInit {
  image;

  sliderConfig = {
    spaceBetween: 5,
    centeredSlides: true,
    slidesPerView: 1.5,
    autoplay: true,
    speed: 1000,
    zoom: {
      toggle: true,
      maxRatio: 3
    }
  };

  constructor(private aRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.image = this.dataService.getData('image');
    console.log(this.image);
  }

}
