import { TiresService } from './tires.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tires',
  templateUrl: './tires.component.html',
  styleUrls: ['./tires.component.css']
})
export class TiresComponent implements OnInit {
  tires;
  isActive = false;
  email = "andrikaaremae@gmail.com"

  constructor(service: TiresService) {
      this.tires = service.getTires();
   }

  onSave($event: any) {
    $event.stopPropagation();
    console.log("Tire save button was clicked!", $event)
  }

  onDivClicked(){
    console.log('Save surrounding div was clicked!')
  }

  onKeyUp() {
    console.log(this.email)
  }

  ngOnInit(): void {
  }

}
