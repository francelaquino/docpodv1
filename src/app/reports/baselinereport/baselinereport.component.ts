import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { ActivatedRoute } from '@angular/router';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-baselinereport',
  templateUrl: './baselinereport.component.html',
  styleUrls: ['./baselinereport.component.css']
})
export class BaselinereportComponent implements OnInit {

  healthscore:any=[];
  medicalno:string;
  visitno:string;
  patientinfo:any=[]
  totalpoints:number=0;
  constructor(private patientService:PatientService,private route: ActivatedRoute) { }

  ngOnInit() {
    $(".page-header").hide()
    this.route.queryParams.subscribe(params => {
      this.medicalno=params["mrno"];
      this.visitno=params["visitno"];
      this.patientService.getPatientDetailsMedicalNo(this.medicalno).subscribe(response => {
        this.patientinfo=response;
       });
      this.patientService.getHealthScore_v1(this.medicalno,this.visitno).subscribe(response => {
        this.healthscore=response;
        this.healthscore.forEach(result => {
          this.totalpoints=this.totalpoints+Number(result.result_points);
         })
       });
      
    })
    
     
    
    
  }

}
