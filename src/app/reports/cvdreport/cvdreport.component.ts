import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { ActivatedRoute } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-cvdreport',
  templateUrl: './cvdreport.component.html',
  styleUrls: ['./cvdreport.component.css']
})
export class CvdreportComponent implements OnInit {
  cvdscore:any=[];
  medicalno:string;
  visitno:string;
  patientinfo:any=[]
  constructor(private patientService:PatientService,private route: ActivatedRoute) { }
  ngOnInit() {
    $(".page-header").hide()
    this.route.queryParams.subscribe(params => {
      this.medicalno=params["mrno"];
      this.visitno=params["visitno"];
      this.patientService.getPatientDetailsMedicalNo(this.medicalno).subscribe(response => {
        this.patientinfo=response;
       });
      this.patientService.getCVDScore_v1(this.medicalno,this.visitno).subscribe(response => {
        this.cvdscore=response;
       });
      
    })
    
     
    
    
  }
  

}
