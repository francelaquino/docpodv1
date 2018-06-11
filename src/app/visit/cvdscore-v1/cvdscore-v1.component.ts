


import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-cvdscore-v1',
  templateUrl: './cvdscore-v1.component.html',
  styleUrls: ['./cvdscore-v1.component.css']
})
export class CvdscoreV1Component implements OnInit {

  cvdscore:any=[];
  public medicalno:string;
  public visitno:string;
  constructor(public bsModalRef: BsModalRef,private patientService:PatientService) { }

  ngOnInit() {
    setTimeout(() => {
      this.patientService.getCVDScore_v1(this.medicalno,this.visitno).subscribe(response => {
        this.cvdscore=response;
        console.log(this.cvdscore);
       });
      
    }, 0);
    
    
  }

}
