import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Home',
          icon: 'icon-home',
          url: '#/'
         
      },
      {
          label: 'Patient',
          icon: 'icon-user',
          items: [
              {label: 'Registration', url: 'patient/registration'},
              {label: 'Search Patient', url: 'patient/search'}
          ]
      },
      {
        label: 'Patient Visit',
        icon: 'icon-list',
        items: [
            {label: 'New Patient Visit', url: '/patientorder/createorder'},
            {label: 'Search Patient Visit', url: '/patientorder/patientorder'}
        ]
    }, {
        label: 'Goal Setting',
        icon: 'fa fa-tasks',
        items: [
            {label: 'Create Patient Order', url: 'patientorder/createorder'},
            {label: 'View Patient Order', url: 'patientorder/patientorder'}
        ]
    }
  ];
  }

}
