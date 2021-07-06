import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  as:any

  constructor(private router:Router) { }

  ngOnInit(): void {
    // this.as=this.service.rowData
    console.log("myroe data",this.as)

  }
  profile(){
    this.router.navigate(['./profile'])

  }
  settings(){
    this.router.navigate(['./settings'])
  }
  project(){
    this.router.navigate(['./'])
  }
  activities(){
    this.router.navigate(['./activities'])
  }
  contacts(){
    this.router.navigate(['./contacts'])
  }

}
