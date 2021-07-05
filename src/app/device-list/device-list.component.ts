import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
  @Output() toggleRightSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router , private service:ProviderService) { }
  

  rows = [];
  rowclick=false;

  ngOnInit() {
    this.fetch((data:any) => {
      this.rows = data;
    });
  }

  fetch(cb:any) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://swimlane.github.io/ngx-datatable/assets/data/company.json`);

    req.onload = () => {
      const data = JSON.parse(req.response);
      cb(data);
    };

    req.send();
  }

  toggleRightSidebar() {
    this.service.toggler()
    console.log("device list called")
    this.toggleRightSidebarForMe.emit()
    
  
  }


}
