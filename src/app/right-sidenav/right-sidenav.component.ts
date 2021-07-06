import { Component, Input, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.scss']
})
export class RightSidenavComponent implements OnInit {
  getRowData=[]

  constructor(private service:ProviderService) { 
    // this.getRowData=this.service.rowData
    // this.hello()
  }

  ngOnInit(): void {
  this.getRowData=this.service.rowData
  console.log("hellodfghjkjhgfd");
  

    this.hello()
    
  }
  hello(){
    console.log("asdsfghjkl;kljkhjghgfd",this.service.rowData);


  }

}
