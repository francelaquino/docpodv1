import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { ActivatedRoute } from '@angular/router';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-baselinedescreport',
  templateUrl: './baselinedescreport.component.html',
  styleUrls: ['./baselinedescreport.component.css']
})
export class BaselinedescreportComponent implements OnInit {

  healthscore:any=[];
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
      this.patientService.getDocPodReport_v1(this.medicalno,this.visitno).subscribe(response => {
        this.healthscore=response;
       });
      
    })
    
     
    
    
  }

}
