import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeOffEnabled: boolean = true;
  upDisabled: boolean = false;
  downDisabled: boolean = false;
  leftDisabled: boolean = false;
  rightDisabled: boolean = false;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
    }
  }

  handleLand(rocketImage) {
    let result = window.alert('The shuttle is landing. Landing gear engaged.');
    this.color = 'green';
    this.height = 0;
    this.width = 0;
    this.message = 'The shuttle has landed.';
    rocketImage.style.bottom = '0px';
  }

  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort the mission?');
    if (result) {
       this.color = 'red';
       this.height = 0;
       this.width = 0;
       this.message = 'Mission aborted.';
       rocketImage.style.bottom = '0px';
    }
  }

  moveRocket(rocketImage, direction){
    if (direction === "right" && this.message==="Shuttle in flight." && this.width<475000){
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left=movement;
      this.width += 10000;
    }
    if (direction === "left" && this.message==="Shuttle in flight." && this.width>-20000){
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left=movement;
      this.width -= 10000;
    }

    if (direction === "up" && this.message==="Shuttle in flight." && this.height<380000){
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom=movement;
      this.height += 10000;
    }

    if (direction === "down" && this.message==="Shuttle in flight." && this.height>-2000){
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom=movement;
      this.height -= 10000;
    }


  }

  borderCheck(){
    if(this.height<=0 || this.height>320000 || this.width<0 || this.width>450000){
      this.color='orange'
    } else {
      this.color='blue'
    }
  }

  flyAwayCheck(){
    if(this.height>=380000){
      this.upDisabled=true;
    } else{
      this.upDisabled=false;
    }
    if(this.height<=-2000){
      this.downDisabled=true;
    } else{
      this.downDisabled=false;
    }
    if(this.width<=-20000){
      this.leftDisabled=true;
    } else{
      this.leftDisabled=false;
    }
    if(this.width>=475000){
      this.rightDisabled=true;
    } else {
      this.rightDisabled=false;
    }
  }
  

}
