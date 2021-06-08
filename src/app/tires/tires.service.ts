import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TiresService {
  getTires() {
    return ["Pirelli", "Michelin", "Nokian", "Yokohama"]
  }
}
