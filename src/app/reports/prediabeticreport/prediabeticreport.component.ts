import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { ActivatedRoute } from '@angular/router';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-prediabeticreport',
  templateUrl: './prediabeticreport.component.html',
  styleUrls: ['./prediabeticreport.component.css']
})
export class PrediabeticreportComponent implements OnInit {

  prediabetic:any=[];
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
      this.patientService.getPrediabeticScore_v1(this.medicalno,this.visitno).subscribe(response => {
        this.prediabetic=response;
       });
      
    })
    
     
    
    
  }

}
