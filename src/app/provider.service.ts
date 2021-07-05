import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  toggle:boolean= false

  constructor() { }

  toggler(){
    this.toggle=!this.toggle
    console.log("service called",this.toggle)
  }

}
