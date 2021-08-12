import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://kansascity.craigslist.org/', 
  'https://www.dickssportinggoods.com/p/perception-swifty-deluxe-9-5-kayak-15ptnuswftydlx95spsk/15ptnuswftydlx95spsk?Product=ProductSuggest'];

  constructor() { }

  ngOnInit() {
  }

}
