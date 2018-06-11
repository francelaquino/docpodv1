import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-overallscore-v1',
  templateUrl: './overallscore-v1.component.html',
  styleUrls: ['./overallscore-v1.component.css']
})
export class OverallscoreV1Component implements OnInit {

  healthscore:any=[];
  public medicalno:string;
  public visitno:string;
  constructor(public bsModalRef: BsModalRef,private patientService:PatientService) { }

  ngOnInit() {
    setTimeout(() => {
      this.patientService.getDocPodReport_v1(this.medicalno,this.visitno).subscribe(response => {
        this.healthscore=response;
       });
      
    }, 0);
    
    
  }

}

