import { BikesService } from './bikes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})

export class BikesComponent implements OnInit {
  bikes;
  isActive = true;
  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  exampleBike = {
    name: "Kawasaki Ninja",
    rating: 4.9745,
    kilowats: 125,
    price: 1900.95,
    releaseDate: new Date(2002, 3, 1)
  }

  constructor(service: BikesService) {
      this.bikes = service.getBikes();
   }

  onSave () {
    console.log("Bike save button was clicked!")
  }

  onDivClicked() {
    console.log("Save surrounding div was clicked!")
  }

  ngOnInit(): void {
  }

}
