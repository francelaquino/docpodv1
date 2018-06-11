


import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-healthscore-v1',
  templateUrl: './healthscore-v1.component.html',
  styleUrls: ['./healthscore-v1.component.css']
})
export class HealthscoreV1Component implements OnInit {

  healthscore:any=[];
  public medicalno:string;
  public visitno:string;
  constructor(public bsModalRef: BsModalRef,private patientService:PatientService) { }

  ngOnInit() {
    setTimeout(() => {
      this.patientService.getHealthScore_v1(this.medicalno,this.visitno).subscribe(response => {
        this.healthscore=response;
       });
      
    }, 0);
    
    
  }

}
