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
  surveyinfo:any=[]
  totalpoints:number=0;
  totalhealthpoints:number=0;
  visitdate:string="";
  alreadyhavediabetic:string="";
  isloading:boolean=true;
  public hdlc_points:string="";
  public hdlc_traffic:string="";
  public hdlc_value:number=0;
  public ldlc_points:string="";
  public ldlc_traffic:string="";
  public ldlc_value:number=0;
  public totalcholesterol_points:string="";
  public totalcholesterol_traffic:string="";
  public totalcholesterol_value:number=0;
  public triglycerides_points:string="";
  public triglycerides_traffic:string="";
  public triglycerides_value:number=0;
  public hba1c_points:string="";
  public hba1c_value:number=0;
  public hba1c_traffic:string="";
  
  public bmi_points:string="";
  public bmi_value:number=0;
  public waist_points:string="";
  public waist_value:number=0;
  public exercise_points:string="";
  public exercise_value:string="";
  
  public smoker_shisha_points:string="";
  public smoker_cigarette_points:string="";
  public systolic_points:string="";
  public diastolic_points:string="";
  public systolic_value:number=0;
  public diastolic_value:number=0;
  constructor(private patientService:PatientService,private route: ActivatedRoute) { }

  ngOnInit() {
    $(".page-header").hide()
    this.route.queryParams.subscribe(params => {
      this.medicalno=params["mrno"];
      this.visitno=params["visitno"];
      this.patientService.getPatientDetailsMedicalNo(this.medicalno).subscribe(response => {
        this.patientinfo=response;
       });
       this.patientService.getVisitData(this.medicalno,this.visitno).subscribe(response => {
        this.visitdate=response.visitdate;
       });

      this.patientService.getSurvey_v1(this.medicalno,this.visitno).subscribe(response => {
        if(response.alreadyhavediabetic=="Y"){
        this.alreadyhavediabetic="Yes";
        }else{
          this.alreadyhavediabetic="No";
        }
       });
      this.patientService.getHealthScore_v1(this.medicalno,this.visitno).subscribe(response => {
        this.healthscore=response;
        response.forEach( (visit) => {
          if(visit.test=="HDLC"){
            this.hdlc_points=visit.result;
            this.hdlc_traffic=visit.traffic;
            this.hdlc_value=(Number(visit.result)*2.5)-5;
          }else if(visit.test=="LDLC"){
            this.ldlc_points=visit.result;
            this.ldlc_traffic=visit.traffic;
            this.ldlc_value=(Number(visit.result)*1.67)-5;
          }else if(visit.test=="BMI"){
            this.bmi_points=visit.result;
            this.bmi_value=(Number(visit.result)*8.33)-5;
          }else if(visit.test=="Cholesterol"){
            this.totalcholesterol_points=visit.result;
            this.totalcholesterol_traffic=visit.traffic;
            this.totalcholesterol_value=(Number(visit.result))-5;
          }else if(visit.test=="Triglycerides"){
            this.triglycerides_points=visit.result;
            this.triglycerides_traffic=visit.traffic;
            this.triglycerides_value=(Number(visit.result_points)*8)-5;
          }else if(visit.test=="HbA1c"){
            this.hba1c_points=visit.result;
            this.hba1c_traffic=visit.traffic;
            this.hba1c_value=(Number(visit.result_points)*3.33)-5;
          }else if(visit.test=="Blood Pressure"){
            this.diastolic_points=visit.result_diastolic;
            this.diastolic_value=(Number(visit.result_diastolic)*1.67)-5;
            this.systolic_points=visit.result_systolic;
            this.systolic_value=(Number(visit.result_systolic)*1.67)-5;
          }else if(visit.test=="Waist Size"){
            this.waist_points=visit.result;
            this.waist_value=(Number(visit.result))-5;
          }else if(visit.test=="Moderate Exercise" || visit.test=="Vigorous Exercise"){
            this.exercise_points=visit.risk_category;
            this.exercise_value=visit.result;

          }
          /*else if(visit.test=="Smoking Cigarettes"){
            this.smoker_cigarette_points=visit.result_points;
            this.smoker_cigarette_message=visit.result1+". "+visit.message;
          }else if(visit.test=="Smoking Shisha"){
            this.smoker_shisha_points=visit.result_points;
            this.smoker_shisha_message=visit.result1+". "+visit.message;*/
          
      })
      
       });
      
    })

    setTimeout(() => {
      $(".loading").hide();
      $(".report").show();
    }, 3000);
    
     
    
    
  }


}
