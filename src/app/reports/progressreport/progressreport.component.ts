
import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { ActivatedRoute } from '@angular/router';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-progressreport',
  templateUrl: './progressreport.component.html',
  styleUrls: ['./progressreport.component.css']
})
export class ProgressreportComponent implements OnInit {

  public goalsetting:any=[];
  dataCigarette:any;
  dataShisha:any;
  dataHbA1c:any;
  dataTriglycerides:any;
  dataCholesterol: any;
  dataHDLC: any;
  dataLDLC: any;
  options:any;
  healthscore:any=[];
  medicalno:string;
  visitno1:string;
  visitno2:string;
  patientinfo:any=[]
  
  public first_hdlc:string="";
  public first_hdlc_color:string="";
  public first_ldlc:string="";
  public first_ldlc_color:string="";
  public first_totalcholesterol:string="";
  public first_totalcholesterol_color:string="";
  public first_triglycerides:string="";
  public first_triglycerides_color:string="";
  public first_hba1c:string="";
  public first_hba1c_color:string="";
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
  public first_smoker_shisha_color:string="";
  public first_smoker_cigarette_points:string="";
  public first_smoker_cigarette_color:string="";
  public second_hdlc:string="";
  public second_hdlc_color:string="";
  public second_ldlc:string="";
  public second_ldlc_color:string="";
  public second_totalcholesterol:string="";
  public second_totalcholesterol_color:string="";
  public second_triglycerides:string="";
  public second_triglycerides_color:string="";
  public second_hba1c:string="";
  public second_hba1c_color:string="";
  public second_bmi:string="";
  public second_exercisee:string="";
  public second_smoker_shisha:string="";
  public second_smoker_shisha_color:string="";
  public second_smoker_cigarette:string="";
  public second_smoker_cigarette_color:string="";
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
  public second_hdlc_message:string="";
  public second_ldlc_message:string="";
  public second_totalcholesterol_message:string="";
  public second_triglycerides_message:string="";
  public second_hba1c_message:string="";
  public second_bmi_message:string="";
  public second_exercise_moderate_message:string="";
  public second_exercise_vigorous_message:string="";
  public second_smoker_shisha_message:string="";
  public second_smoker_cigarette_message:string="";


  constructor(private patientService:PatientService,private route: ActivatedRoute) {
    

   }

  getVisit(medicalno:string,visitno:string,visitcontrol:string) {
    this.patientService.getHealthScore_v1(medicalno,visitno).subscribe(response => {
      response.forEach( (visit) => {
        if(visitcontrol=="first"){
          if(visit.test=="HDLC"){
            this.first_hdlc=visit.result+visit.unit;
            this.first_hdlc_points=visit.result_points;
            this.first_hdlc_color=visit.colorcode;
          }else if(visit.test=="LDLC"){
            this.first_ldlc=visit.result+visit.unit;
            this.first_ldlc_points=visit.result_points;
            this.first_ldlc_color=visit.colorcode;
          }else if(visit.test=="BMI"){
            this.first_bmi=visit.result+visit.unit;
            this.first_bmi_points=visit.result_points;
          }else if(visit.test=="Cholesterol"){
            this.first_totalcholesterol=visit.result+visit.unit;
            this.first_totalcholesterol_points=visit.result_points;
            this.first_totalcholesterol_color=visit.colorcode;
          }else if(visit.test=="Triglycerides"){
            this.first_triglycerides=visit.result+visit.unit;
            this.first_triglycerides_points=visit.result_points;
            this.first_triglycerides_color=visit.colorcode;
          }else if(visit.test=="HbA1c"){
            this.first_hba1c=visit.result+visit.unit;
            this.first_hba1c_points=visit.result_points;
            this.first_hba1c_color=visit.colorcode;
          }else if(visit.test=="Smoking Cigarettes"){
            this.first_smoker_cigarette=visit.result;
            this.first_smoker_cigarette_points=visit.result_points;
            this.first_smoker_cigarette_color=visit.color;
          }else if(visit.test=="Smoking Shisha"){
            this.first_smoker_shisha=visit.result;
            this.first_smoker_shisha_points=visit.result_points;
            this.first_smoker_shisha_color=visit.color;
          }else if(visit.test=="Moderate Exercise" || visit.test=="Vigorous Exercise"){
            this.first_exercise_type=visit.test
            this.first_exercise=visit.result;
            this.first_exercise_points=visit.result_points;
          }
        }else{
          if(visit.test=="HDLC"){
            this.second_hdlc=visit.result;
            this.second_hdlc_points=visit.result_points;
            this.second_hdlc_message=visit.message;
            this.second_hdlc_color=visit.colorcode;
          }else if(visit.test=="LDLC"){
            this.second_ldlc=visit.result;
            this.second_ldlc_points=visit.result_points;
            this.second_ldlc_message=visit.message;
            this.second_ldlc_color=visit.colorcode;
          }else if(visit.test=="BMI"){
            this.second_bmi=visit.result;
            this.second_bmi_points=visit.result_points;
            this.second_bmi_message=visit.message;
          }else if(visit.test=="Cholesterol"){
            this.second_totalcholesterol=visit.result;
            this.second_totalcholesterol_points=visit.result_points;
            this.second_totalcholesterol_message=visit.message;
            this.second_totalcholesterol_color=visit.colorcode;
          }else if(visit.test=="Triglycerides"){
            this.second_triglycerides=visit.result;
            this.second_triglycerides_points=visit.result_points;
            this.second_triglycerides_message=visit.message;
            this.second_triglycerides_color=visit.colorcode;
          }else if(visit.test=="HbA1c"){
            console.log(visit)
            this.second_hba1c=visit.result;
            this.second_hba1c_points=visit.result_points;
            this.second_hba1c_message=visit.message;
            this.second_hba1c_color=visit.colorcode;
          }else if(visit.test=="BMI"){
            this.second_bmi=visit.result;
            this.second_bmi_points=visit.result_points;
            this.second_bmi_message=visit.message;
          }else if(visit.test=="Smoking Cigarettes"){
           
            this.second_smoker_cigarette=visit.result;
            this.second_smoker_cigarette_points=visit.result_points;
            this.second_smoker_cigarette_color=visit.color;
            this.second_smoker_cigarette_message=visit.message;
          }else if(visit.test=="Smoking Shisha"){
            this.second_smoker_shisha=visit.result;
            this.second_smoker_shisha_points=visit.result_points;
            this.second_smoker_shisha_color=visit.color;
            this.second_smoker_shisha_message=visit.message;
        }
      }
      });
    
  })

  }
  ngOnInit() {

    this.options = {
      responsive: false,
      maintainAspectRatio: true,
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMax: 60,
            }
        }],
    },
      animation: false,
      tooltips: {
        enabled:false,
      },
      legend: {
          position: 'false'
      }
    };

    $(".page-header").hide()
    this.route.queryParams.subscribe(params => {
      this.medicalno=params["mrno"];
      this.visitno1=params["visitno1"];
      this.visitno2=params["visitno2"];
      this.patientService.getPatientDetailsMedicalNo(this.medicalno).subscribe(response => {
        this.patientinfo=response;
       });
       this.getVisit(this.medicalno,this.visitno1,"first");
       this.getVisit(this.medicalno,this.visitno2,"second");
        this.patientService.getGoalSetting_v1(this.medicalno,this.visitno1,this.visitno2).subscribe(response => {
          this.goalsetting=response;
          this.showChart();
          
        })

      


    })
          
  }

  showChart(){
    setTimeout(() => {
        
      this.dataHDLC = {
        labels: ['HDLC (Good Cholesterol)'],
        datasets: [
            {
                backgroundColor: this.first_hdlc_color,
                data: [Number(this.first_hdlc_points)],
            },
            {
                backgroundColor: this.second_hdlc_color,
                data: [Number(this.second_hdlc_points)],
            }
        ]
      }

      this.dataLDLC = {
        labels: ['LDLC (Good Cholesterol)'],
        datasets: [
            {
              backgroundColor: this.first_ldlc_color,
                data: [Number(this.first_ldlc_points)],
            },
            {
              backgroundColor: this.second_ldlc_color,
                data: [Number(this.second_ldlc_points)],
            }
        ]
      }

      this.dataCholesterol = {
        labels: ['Total Cholesterol'],
        datasets: [
            {
              backgroundColor: this.first_totalcholesterol_color,
                data: [Number(this.first_totalcholesterol_points)],
            },
            {
              backgroundColor: this.second_totalcholesterol_color,
                data: [Number(this.second_totalcholesterol_points)],
            }
        ]
      }

      
      this.dataTriglycerides = {
        labels: ['Triglycerides'],
        datasets: [
            {
              backgroundColor: this.first_triglycerides_color,
                data: [Number(this.first_triglycerides_points)],
            },
            {
              backgroundColor: this.second_triglycerides_color,
                data: [Number(this.second_triglycerides_points)],
            }
        ]
      }

      this.dataHbA1c = {
        labels: ['HbA1c'],
        datasets: [
            {
              backgroundColor: this.first_hba1c_color,
                data: [Number(this.first_hba1c_points)],
            },
            {
              backgroundColor: this.second_hba1c_color,
                data: [Number(this.second_hba1c_points)],
            }
        ]
      }

      this.dataCigarette = {
        labels: ['Cigarette Smoking'],
        datasets: [
            {
              backgroundColor: this.first_smoker_cigarette_color,
                data: [Number(this.first_smoker_cigarette_points)],
            },
            {
              backgroundColor: this.second_smoker_cigarette_color,
                data: [Number(this.second_smoker_cigarette_points)],
            }
        ]
      }

      this.dataShisha = {
        labels: ['Shisha Smoking'],
        datasets: [
            {
              backgroundColor: this.first_smoker_shisha_color,
                data: [Number(this.first_smoker_shisha_points)],
            },
            {
              backgroundColor: this.second_smoker_shisha_color,
                data: [Number(this.second_smoker_shisha_points)],
            }
        ]
      }
  
      

    }, 2000);
  }

}
