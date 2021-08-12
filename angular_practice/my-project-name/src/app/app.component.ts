import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the dimension where I can change the title';
  name: string ='Josh';
  itemList: string[] = ['stuff','item','thing','whatchamacallit'];
  rectangle = {
    length: 5,
    width: 6,
    area: function() {
       return this.length * this.width;
    }
  };
}


