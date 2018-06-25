import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl} from '@angular/forms';
import { DataService} from '../../services/data.service';
import { PatientService} from '../../services/patient.service';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-goalreport-v1',
  templateUrl: './goalreport-v1.component.html',
  styleUrls: ['./goalreport-v1.component.css']
})
export class GoalreportV1Component implements OnInit {
  public form:FormGroup;
  visitcontrol:string="";
  public selectedRows:any=[];
  public visitDialog:boolean=false;
  public visitno:string="";
  public visitno1:string="";
  public visitno2:string="";
  public patientorders:any=[];
  public first_hdlc:string="";
  public first_ldlc:string="";
  public first_totalcholesterol:string="";
  public first_triglycerides:string="";
  public first_hba1c:string="";
  public first_bmi:string="";
  public first_exercise:string="";
  public first_smoker_shisha:string="";
  public first_smoker_cigarette:string="";
  public first_hdlc_points:string="";
  public first_ldlc_points:string="";
  public first_totalcholesterol_points:string="";
  public first_triglycerides_points:string="";
  public first_hba1c_points:string="";
  public first_bmi_points:string="";
  public first_exercise_type:string="";
  public first_exercise_points:string="";
  public first_smoker_shisha_points:string="";
  public first_smoker_cigarette_points:string="";
  public second_hdlc:string="";
  public second_ldlc:string="";
  public second_totalcholesterol:string="";
  public second_triglycerides:string="";
  public second_hba1c:string="";
  public second_bmi:string="";
  public second_exercisee:string="";
  public second_smoker_shisha:string="";
  public second_smoker_cigarette:string="";
  public second_hdlc_points:string="";
  public second_ldlc_points:string="";
  public second_totalcholesterol_points:string="";
  public second_triglycerides_points:string="";
  public second_hba1c_points:string="";
  public second_bmi_points:string="";
  public second_exercise:string="";
  public second_exercise_points:string="";
  public second_smoker_shisha_points:string="";
  public second_smoker_cigarette_points:string="";
  public target_hdlc:string="";
  public target_ldlc:string="";
  public target_totalcholesterol:string="";
  public target_triglycerides:string="";
  public target_hba1c:string="";
  public target_bmi:string="";
  public target_exercise:string="";
  public target_smoker_shisha:string="";
  public target_smoker_cigarette:string="";
  public goalsetting:any=[];
  constructor( public dataService:DataService,public patientService:PatientService, private fb:FormBuilder) { }

  ngOnInit() {
    this.patientorders=[];
    this.form= this.fb.group({
      medicalno: [''],
      firstname: [''],
      secondname: [''],
      lastname: [''],
      gender: [''],
      birthdate: [''],
      maritalstatus: [''],
      nationality: [''],
      emailaddress: ['']
    })
  }

checkPatientGoal(){
  this.patientService.getGoalSetting_v1(this.form.value.medicalno,this.visitno1,this.visitno2).subscribe(response => {
    this.goalsetting=response;
  })
}
getSelectedVisit(){
  this.patientService.getHealthScore_v1(this.form.value.medicalno,this.visitno).subscribe(response => {
    if(this.visitcontrol=="first"){
      this.visitno1=this.visitno;
      response.forEach( (visit) => {
        if(visit.test=="HDLC"){
          this.first_hdlc=visit.result+visit.unit;
          this.first_hdlc_points=visit.result_points;
          this.target_hdlc=visit.target;
        }else if(visit.test=="LDLC"){
          this.first_ldlc=visit.result+visit.unit;
          this.first_ldlc_points=visit.result_points;
          this.target_ldlc=visit.target;
        }else if(visit.test=="BMI"){
          this.first_bmi=visit.result+visit.unit;
          this.first_bmi_points=visit.result_points;
          this.target_bmi=visit.target;
        }else if(visit.test=="Cholesterol"){
          this.first_totalcholesterol=visit.result+visit.unit;
          this.first_totalcholesterol_points=visit.result_points;
          this.target_totalcholesterol=visit.target;
        }else if(visit.test=="Triglycerides"){
          this.first_triglycerides=visit.result+visit.unit;
          this.first_triglycerides_points=visit.result_points;
          this.target_triglycerides=visit.target;
        }else if(visit.test=="HbA1c"){
          this.first_hba1c=visit.result+visit.unit;
          this.first_hba1c_points=visit.result_points;
          this.target_hba1c=visit.target;
        }else if(visit.test=="Smoking Cigarettes"){
          this.first_smoker_cigarette=visit.result;
          this.first_smoker_cigarette_points=visit.result_points;
          this.target_smoker_cigarette=visit.target;
        }else if(visit.test=="Smoking Shisha"){
          this.first_smoker_shisha=visit.result;
          this.first_smoker_shisha_points=visit.result_points;
          this.target_smoker_shisha=visit.target;
        }else if(visit.test=="Moderate Exercise" || visit.test=="Vigorous Exercise"){
          this.first_exercise_type=visit.test
          this.first_exercise=visit.result;
          this.first_exercise_points=visit.result_points;
          this.target_exercise=visit.target;
        }
      });
      
      
    }else{
      this.visitno2=this.visitno;
      response.forEach( (visit) => {
        if(visit.test=="HDLC"){
          this.second_hdlc=visit.result;
          this.second_hdlc_points=visit.result_points;
        }else if(visit.test=="LDLC"){
          this.second_ldlc=visit.result;
          this.second_ldlc_points=visit.result_points;
        }else if(visit.test=="BMI"){
          this.second_bmi=visit.result;
          this.second_bmi_points=visit.result_points;
        }else if(visit.test=="Cholesterol"){
          this.second_totalcholesterol=visit.result;
          this.second_totalcholesterol_points=visit.result_points;
        }else if(visit.test=="Triglycerides"){
          this.second_triglycerides=visit.result;
          this.second_triglycerides_points=visit.result_points;
        }else if(visit.test=="HbA1c"){
          this.second_hba1c=visit.result;
          this.second_hba1c_points=visit.result_points;
        }else if(visit.test=="Smoking Cigarettes"){
          this.second_smoker_cigarette=visit.result;
          this.second_smoker_cigarette_points=visit.result_points;
        }else if(visit.test=="Smoking Shisha"){
          this.second_smoker_shisha=visit.result;
          this.second_smoker_shisha_points=visit.result_points;
        }else if(visit.test=="Moderate Exercise" || visit.test=="Vigorous Exercise"){
          this.second_exercise=visit.result;
          this.second_exercise_points=visit.result_points;
        }
      });
      this.checkPatientGoal();
    }
    this.visitDialog=false;
    
    
  })
}
getPatientDetails(){
  this.patientService.getPatientDetailsMedicalNo(this.form.value.medicalno).subscribe(response => {
    if(response.firstname==null){
      alert("Invalid medical no.");
      return false;
    }
    
    this.form.patchValue({
      firstname: response.firstname,
      nationality: response.nationality,
      birthdate: response.birthdate,
      emailaddress: response.emailaddress,
      gender: response.gender,
      lastname: response.lastname,
      secondname: response.secondname,
    })  
    
    
  })
}

onRowSelect(event){
  this.visitno=event.data.visitno;

}

getPatientVisits(){
  if(this.form.value.medicalno==""){
    alert("Please provide patient information")
  }else
    if(this.first_bmi=="" && this.visitcontrol=="second"){
      alert("Please provide first visit");
    }else{
    this.patientService.getPatientOrders(this.form.value.medicalno).subscribe(response => {
      this.patientorders=response;
      this.visitDialog=true;
      this.selectedRows=[];
    });
  }
  }
}

