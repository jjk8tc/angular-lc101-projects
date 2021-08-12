import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGF1bmNoJTIwY29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  image3 = 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2luZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

  constructor() { }

  ngOnInit() {
  }

}