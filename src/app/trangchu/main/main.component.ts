import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @ViewChild('childModal', { static: false }) childModal: ModalDirective;

  myInterval = 1500;
  activeSlideIndex = 0;

  slides = [
    {
      image: 'https://s3img.vcdn.vn/123phim/2019/10/khung-hinh-15699048110729.jpg',
      text: 'Hoang',
      linkTrailer: 'https://www.youtube.com/embed/K1-11dWJocM?autoplay=1'
    },
    {
      image: 'https://s3img.vcdn.vn/123phim/2019/09/ca-map-15695574190123.jpg',
      text: 'Trinh Van Hoang',
      linkTrailer: 'https://www.youtube.com/embed/GFG0pFXP3bk?autoplay=1'
    },
    {
      image: 'https://s3img.vcdn.vn/123phim/2019/09/the-beatles-15695575011462.jpg',
      text: 'Trinh Van Hoang',
      linkTrailer: 'https://www.youtube.com/embed/c24T0xJz4iU?autoplay=1'
    },
    {
      image: 'https://s3img.vcdn.vn/123phim/2019/10/xin-chao-15699048584747.jpg',
      text: 'Hoang Van Trinh',
      linkTrailer: 'https://www.youtube.com/embed/ye6eWjyVjoo?autoplay=1'
    },
    {
      image: 'https://s3img.vcdn.vn/123phim/2019/09/na-traaaaaaaaaaaa-15695574430908.jpg',
      text: 'Natra',
      linkTrailer: 'https://www.youtube.com/embed/HlLXm5TFI6s?autoplay=1'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  showChildModal(link: string): void {
    console.log(link);
    this.childModal.show();
  }
  hideChildModal(): void {
    this.childModal.hide();
  }

}
