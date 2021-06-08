import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BikesService {
  getBikes() {
    return ["Kawasaki", "Suzuki", "KTM"]
  }
}
