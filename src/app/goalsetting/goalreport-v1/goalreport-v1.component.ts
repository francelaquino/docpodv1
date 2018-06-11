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
  public patientorders:any=[];
  public first_hdlc:string="";
  public first_ldlc:string="";
  public first_totalcholesterol:string="";
  public first_triglycerides:string="";
  public first_hba1c:string="";
  public first_bmi:string="";
  public first_exercise_moderate:string="";
  public first_exercise_vigorous:string="";
  public first_smoker_shisha:string="";
  public first_smoker_cigarette:string="";
  public first_hdlc_points:string="";
  public first_ldlc_points:string="";
  public first_totalcholesterol_points:string="";
  public first_triglycerides_points:string="";
  public first_hba1c_points:string="";
  public first_bmi_points:string="";
  public first_exercise_moderate_points:string="";
  public first_exercise_vigorous_points:string="";
  public first_smoker_shisha_points:string="";
  public first_smoker_cigarette_points:string="";
  public second_hdlc:string="";
  public second_ldlc:string="";
  public second_totalcholesterol:string="";
  public second_triglycerides:string="";
  public second_hba1c:string="";
  public second_bmi:string="";
  public second_exercise_moderate:string="";
  public second_exercise_vigorous:string="";
  public second_smoker_shisha:string="";
  public second_smoker_cigarette:string="";
  public second_hdlc_points:string="";
  public second_ldlc_points:string="";
  public second_totalcholesterol_points:string="";
  public second_triglycerides_points:string="";
  public second_hba1c_points:string="";
  public second_bmi_points:string="";
  public second_exercise_moderate_points:string="";
  public second_exercise_vigorous_points:string="";
  public second_smoker_shisha_points:string="";
  public second_smoker_cigarette_points:string="";
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

getSelectedVisit(){
  this.patientService.getHealthScore_v1(this.form.value.medicalno,this.visitno).subscribe(response => {
    if(this.visitcontrol=="first"){
      response.forEach( (visit) => {
        if(visit.test=="HDLC"){
          this.first_hdlc=visit.result;
          this.first_hdlc_points=visit.result_points;
        }else if(visit.test=="LDLC"){
          this.first_ldlc=visit.result;
          this.first_ldlc_points=visit.result_points;
        }else if(visit.test=="BMI"){
          this.first_bmi=visit.result;
          this.first_bmi_points=visit.result_points;
        }else if(visit.test=="Cholesterol"){
          this.first_totalcholesterol=visit.result;
          this.first_totalcholesterol_points=visit.result_points;
        }else if(visit.test=="Triglycerides"){
          this.first_triglycerides=visit.result;
          this.first_triglycerides_points=visit.result_points;
        }else if(visit.test=="HbA1c"){
          this.first_hba1c=visit.result;
          this.first_hba1c_points=visit.result_points;
        }else if(visit.test=="BMI"){
          this.first_bmi=visit.result;
          this.first_bmi_points=visit.result_points;
        }
      });
      
      
    }else{
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
        }else if(visit.test=="BMI"){
          this.second_bmi=visit.result;
          this.second_bmi_points=visit.result_points;
        }
      });
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
  if(this.form.value.medicalno!=""){
    this.patientService.getPatientOrders(this.form.value.medicalno).subscribe(response => {
      this.patientorders=response;
      this.visitDialog=true;
      this.selectedRows=[];
    });
  }
}

}
