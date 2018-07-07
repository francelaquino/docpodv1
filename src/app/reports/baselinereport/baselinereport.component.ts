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
  public hdlc_color:string="";
  public hdlc_value:number=0;
  public ldlc_points:string="";
  public ldlc_traffic:string="";
  public ldlc_color:string="";
  public ldlc_value:number=0;
  public totalcholesterol_points:string="";
  public totalcholesterol_traffic:string="";
  public totalcholesterol_color:string="";
  public totalcholesterol_value:number=0;
  public triglycerides_points:string="";
  public triglycerides_color:string="";
  public triglycerides_traffic:string="";
  public triglycerides_value:number=0;
  public hba1c_points:string="";
  public hba1c_color:string="";
  public hba1c_value:number=0;
  public hba1c_traffic:string="";
  
  public bmi_points:string="";
  public bmi_value:number=0;
  public bmi_traffic:string="";
  public bmi_color:string="";
  public waist_points:string="";
  public waist_color:string="";
  public waist_value:number=0;
  public waist_traffic:string="";
  public exercise_points:string="";
  public exercise_value:string="";
  public exercise_color:string="";
  public exercise_traffic:string="";
  public smoker_shisha_points:string="";
  public smoker_shisha_color:string="";
  public smoker_shisha_value:string="";
  public smoker_shisha_traffic:string="";
  public smoker_cigarette_points:string="";
  public smoker_cigarette_color:string="";
  public smoker_cigarette_value:string="";
  public smoker_cigarette_traffic:string="";
  public systolic_points:string="";
  public systolic_color:string="";
  public systolic_traffic:string="";
  public diastolic_points:string="";
  public diastolic_traffic:string="";
  public diastolic_color:string="";
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
            this.hdlc_color=visit.colorcode;
            this.hdlc_value=(Number(visit.result)*2.5)-5;
          }else if(visit.test=="LDLC"){
            this.ldlc_points=visit.result;
            this.ldlc_traffic=visit.traffic;
            this.ldlc_color=visit.colorcode;
            this.ldlc_value=(Number(visit.result)*1.67)-5;
          }else if(visit.test=="BMI"){
            this.bmi_points=visit.result;
            this.bmi_traffic=visit.traffic;
            this.bmi_color=visit.colorcode;
            this.bmi_value=(Number(visit.result)*8.33)-5;
          }else if(visit.test=="Cholesterol"){
            this.totalcholesterol_points=visit.result;
            this.totalcholesterol_traffic=visit.traffic;
            this.totalcholesterol_color=visit.colorcode;
            this.totalcholesterol_value=(Number(visit.result))-5;
          }else if(visit.test=="Triglycerides"){
            this.triglycerides_points=visit.result;
            this.triglycerides_traffic=visit.traffic;
            this.triglycerides_color=visit.colorcode;
            this.triglycerides_value=(Number(visit.result_points)*8)-5;
          }else if(visit.test=="HbA1c"){
            this.hba1c_points=visit.result;
            this.hba1c_traffic=visit.traffic;
            this.hba1c_color=visit.colorcode;
            this.hba1c_value=(Number(visit.result_points)*3.33)-5;
          }else if(visit.test=="Blood Pressure"){
            this.diastolic_points=visit.result_diastolic;
            this.diastolic_traffic=visit.bpdiastolic_traffic;
            this.diastolic_color=visit.bpdiastolic_colorcode;
            this.diastolic_value=(Number(visit.result_diastolic)*1.67)-3;
            this.systolic_points=visit.result_systolic;
            this.systolic_traffic=visit.bpsystolic_traffic;
            this.systolic_color=visit.bpsystolic_colorcode;
            this.systolic_value=(Number(visit.result_systolic)*1.67)-3;
          }else if(visit.test=="Waist Size"){
            this.waist_points=visit.result;
            this.waist_traffic=visit.traffic;
            this.waist_color=visit.colorcode;
            this.waist_value=(Number(visit.result))-5;
          }else if(visit.test=="Moderate Exercise" || visit.test=="Vigorous Exercise"){
            this.exercise_points=visit.risk_category;
            this.exercise_traffic=visit.traffic;
            this.exercise_value=visit.result;
            this.exercise_color=visit.colorcode;

          }
          else if(visit.test=="Smoking Cigarettes"){
            this.smoker_cigarette_points=visit.riskcategory;
            this.smoker_cigarette_value=visit.result;
            this.smoker_cigarette_traffic=visit.traffic;
            this.smoker_cigarette_color=visit.colorcode;
          }else if(visit.test=="Smoking Shisha"){
            this.smoker_shisha_value=visit.result;
            this.smoker_shisha_points=visit.riskcategory;
            this.smoker_shisha_traffic=visit.traffic;
            this.smoker_shisha_color=visit.colorcode;
          }          
      })
      
       });
      
    })

    setTimeout(() => {
      $(".loading").hide();
      $(".report").show();
    }, 3000);
    
     
    
    
  }


}
