
import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-progressreport',
  templateUrl: './progressreport.component.html',
  styleUrls: ['./progressreport.component.css']
})
export class ProgressreportComponent implements OnInit {

  public goalsetting:any=[];
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
  public first_exercise_color:string="";
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
  public second_exercise:string="";
  public second_exercise_color:string="";
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
  public second_exercise_points:string="";
  public second_smoker_shisha_points:string="";
  public second_smoker_cigarette_points:string="";
  public second_hdlc_message:string="";
  public second_ldlc_message:string="";
  public second_totalcholesterol_message:string="";
  public second_triglycerides_message:string="";
  public second_hba1c_message:string="";
  public second_bmi_message:string="";
  public second_exercise_message:string="";
  public second_smoker_shisha_message:string="";
  public second_smoker_cigarette_message:string="";
  private chartHDLC: AmChart;
  private chartLDLC: AmChart;
  private chartCholesterol: AmChart;
  private chartTriglycerides: AmChart;
  private chartHba1c: AmChart;
  private chartCigarette: AmChart;
  private chartShisha: AmChart;
  private chartExercise: AmChart;
  //Add Bloodpressure
  
  

  constructor(private AmCharts: AmChartsService,private patientService:PatientService,private route: ActivatedRoute) {
    

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
            this.first_smoker_cigarette_color=visit.colorcode;
          }else if(visit.test=="Smoking Shisha"){
            this.first_smoker_shisha=visit.result;
            this.first_smoker_shisha_points=visit.result_points;
            this.first_smoker_shisha_color=visit.colorcode;
          }else if(visit.test=="Moderate Exercise" || visit.test=="Vigorous Exercise"){
            this.first_exercise=visit.result;
            this.first_exercise_points=visit.result_points;
            this.first_exercise_color=visit.colorcode;

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
            this.second_smoker_cigarette_color=visit.colorcode;
            this.second_smoker_cigarette_message=visit.message;
          }else if(visit.test=="Smoking Shisha"){
            this.second_smoker_shisha=visit.result;
            this.second_smoker_shisha_points=visit.result_points;
            this.second_smoker_shisha_color=visit.colorcode;
            this.second_smoker_shisha_message=visit.message;
        }else if(visit.test=="Moderate Exercise" || visit.test=="Vigorous Exercise"){
          this.second_exercise=visit.result;
          this.second_exercise_points=visit.result_points;
          this.second_exercise_color=visit.colorcode;
          this.second_exercise_message=visit.message;
        }
      }

     
      });
      setTimeout(() => {
        this.setChart();
        $("a[title='JavaScript charts']").remove();
        $(".loading").hide();
        $(".report").show();
      }, 3000);
    
  })

  }

  
  setChart(){
    this.chartHDLC = this.AmCharts.makeChart("chartHDLC", {
      "theme": "light",
      "titles": [{
        "text": "HDLC(Good Cholesterol)"
      }],
      "type": "serial",
      "dataProvider": [{
        "visit": "V1",
        "value": this.first_hdlc_points,
        "color": this.first_hdlc_color,
        }, {
          "visit": "V2",
            "value": this.second_hdlc_points,
            "color": this.second_hdlc_color,
        }],
        "graphs": [{
            "fillAlphas": 1,
            "lineAlpha": 0.2,
            "type": "column",
            "fixedColumnWidth" :30,
            "valueField": "value",
            "labelsEnabled": false,
            "axisColor":"white",
            "fillColorsField": "color",
            "labelText": "[[value]]",
            "labelPosition": "middle",
            "color": "#fff"
        }],
        "depth3D": 20,
        "labelsEnabled": false,
        "angle": 30,
        "categoryField": "visit",
        "categoryAxis": {
            "gridPosition": "start",
            "fillAlpha": 0.05,
            "position": "left",
            "labelsEnabled": false,
        },
        "valueAxes": [
          {
            "labelsEnabled": false,
          }
        ]
    
    } );


    this.chartLDLC = this.AmCharts.makeChart("chartLDLC", {
      "theme": "light",
      "titles": [{
        "text": "LDLC(Bad Cholesterol)"
      }],
      "type": "serial",
      "dataProvider": [{
        "visit": "V1",
        "value": this.first_ldlc_points,
        "color": this.first_ldlc_color,
        }, {
          "visit": "V2",
            "value": this.second_ldlc_points,
            "color": this.second_ldlc_color,
        }],
        "graphs": [{
            "fillAlphas": 1,
            "lineAlpha": 0.2,
            "type": "column",
            "fixedColumnWidth" :30,
            "valueField": "value",
            "labelsEnabled": false,
            "axisColor":"white",
            "fillColorsField": "color",
            "labelText": "[[value]]",
            "labelPosition": "middle",
            "color": "#fff"
        }],
        "depth3D": 20,
        "labelsEnabled": false,
        "angle": 30,
        "categoryField": "visit",
        "categoryAxis": {
            "gridPosition": "start",
            "fillAlpha": 0.05,
            "position": "left",
            "labelsEnabled": false,
        },
        "valueAxes": [
          {
            "labelsEnabled": false,
          }
        ]
    
    } );
    
    this.chartCholesterol = this.AmCharts.makeChart("chartCholesterol", {
      "theme": "light",
      "titles": [{
        "text": "Total Cholesterol"
      }],
      "type": "serial",
      "dataProvider": [{
        "visit": "V1",
        "value": this.first_totalcholesterol_points,
        "color": this.first_totalcholesterol_color,
        }, {
          "visit": "V2",
            "value": this.second_totalcholesterol_points,
            "color": this.second_totalcholesterol_color,
        }],
        "graphs": [{
            "fillAlphas": 1,
            "lineAlpha": 0.2,
            "type": "column",
            "fixedColumnWidth" :30,
            "valueField": "value",
            "labelsEnabled": false,
            "axisColor":"white",
            "fillColorsField": "color",
            "labelText": "[[value]]",
            "labelPosition": "middle",
            "color": "#fff"
        }],
        "depth3D": 20,
        "labelsEnabled": false,
        "angle": 30,
        "categoryField": "visit",
        "categoryAxis": {
            "gridPosition": "start",
            "fillAlpha": 0.05,
            "position": "left",
            "labelsEnabled": false,
        },
        "valueAxes": [
          {
            "labelsEnabled": false,
          }
        ]
    
    } );

    
    this.chartTriglycerides = this.AmCharts.makeChart("chartTriglycerides", {
      "theme": "light",
      "titles": [{
        "text": "Triglycerides"
      }],
      "type": "serial",
      "dataProvider": [{
        "visit": "V1",
        "value": this.first_triglycerides_points,
        "color": this.first_triglycerides_color,
        }, {
          "visit": "V2",
            "value": this.second_triglycerides_points,
            "color": this.second_triglycerides_color,
        }],
        "graphs": [{
            "fillAlphas": 1,
            "lineAlpha": 0.2,
            "type": "column",
            "fixedColumnWidth" :30,
            "valueField": "value",
            "labelsEnabled": false,
            "axisColor":"white",
            "fillColorsField": "color",
            "labelText": "[[value]]",
            "labelPosition": "middle",
            "color": "#fff"
        }],
        "depth3D": 20,
        "labelsEnabled": false,
        "angle": 30,
        "categoryField": "visit",
        "categoryAxis": {
            "gridPosition": "start",
            "fillAlpha": 0.05,
            "position": "left",
            "labelsEnabled": false,
        },
        "valueAxes": [
          {
            "labelsEnabled": false,
          }
        ]
    
    } );


    this.chartHba1c = this.AmCharts.makeChart("chartHba1c", {
      "theme": "light",
      "titles": [{
        "text": "HbA1c"
      }],
      "type": "serial",
      "dataProvider": [{
        "visit": "V1",
        "value": this.first_hba1c_points,
        "color": this.first_hba1c_color,
        }, {
          "visit": "V2",
            "value": this.second_hba1c_points,
            "color": this.second_hba1c_color,
        }],
        "graphs": [{
            "fillAlphas": 1,
            "lineAlpha": 0.2,
            "type": "column",
            "fixedColumnWidth" :30,
            "valueField": "value",
            "labelsEnabled": false,
            "axisColor":"white",
            "fillColorsField": "color",
            "labelText": "[[value]]",
            "labelPosition": "middle",
            "color": "#fff"
        }],
        "depth3D": 20,
        "labelsEnabled": false,
        "angle": 30,
        "categoryField": "visit",
        "categoryAxis": {
            "gridPosition": "start",
            "fillAlpha": 0.05,
            "position": "left",
            "labelsEnabled": false,
        },
        "valueAxes": [
          {
            "labelsEnabled": false,
          }
        ]
    
    } );


    
    this.chartCigarette = this.AmCharts.makeChart("chartCigarette", {
      "theme": "light",
      "titles": [{
        "text": "Smoking Cigarette"
      }],
      "type": "serial",
      "dataProvider": [{
        "visit": "V1",
        "value": this.first_smoker_cigarette_points,
        "color": this.first_smoker_cigarette_color,
        }, {
          "visit": "V2",
            "value": this.second_smoker_cigarette_points,
            "color": this.second_smoker_cigarette_color,
        }],
        "graphs": [{
            "fillAlphas": 1,
            "lineAlpha": 0.2,
            "type": "column",
            "fixedColumnWidth" :30,
            "valueField": "value",
            "labelsEnabled": false,
            "axisColor":"white",
            "fillColorsField": "color",
            "labelText": "[[value]]",
            "labelPosition": "middle",
            "color": "#fff"
        }],
        "depth3D": 20,
        "labelsEnabled": false,
        "angle": 30,
        "categoryField": "visit",
        "categoryAxis": {
            "gridPosition": "start",
            "fillAlpha": 0.05,
            "position": "left",
            "labelsEnabled": false,
        },
        "valueAxes": [
          {
            "labelsEnabled": false,
          }
        ]
    
    } );

    
    this.chartShisha = this.AmCharts.makeChart("chartShisha", {
      "theme": "light",
      "titles": [{
        "text": "Smoking Shisha"
      }],
      "type": "serial",
      "dataProvider": [{
        "visit": "V1",
        "value": this.first_smoker_shisha_points,
        "color": this.first_smoker_shisha_color,
        }, {
          "visit": "V2",
            "value": this.second_smoker_shisha_points,
            "color": this.second_smoker_shisha_color,
        }],
        "graphs": [{
            "fillAlphas": 1,
            "lineAlpha": 0.2,
            "type": "column",
            "fixedColumnWidth" :30,
            "valueField": "value",
            "labelsEnabled": false,
            "axisColor":"white",
            "fillColorsField": "color",
            "labelText": "[[value]]",
            "labelPosition": "middle",
            "color": "#fff"
        }],
        "depth3D": 20,
        "labelsEnabled": false,
        "angle": 30,
        "categoryField": "visit",
        "categoryAxis": {
            "gridPosition": "start",
            "fillAlpha": 0.05,
            "position": "left",
            "labelsEnabled": false,
        },
        "valueAxes": [
          {
            "labelsEnabled": false,
          }
        ]
    
    } );
    this.chartExercise = this.AmCharts.makeChart("chartExercise", {
      "theme": "light",
      "titles": [{
        "text": "Exercise"
      }],
      "type": "serial",
      "dataProvider": [{
        "visit": "V1",
        "value": this.first_exercise_points,
        "color": this.first_exercise_color,
        }, {
          "visit": "V2",
            "value": this.second_exercise_points,
            "color": this.second_exercise_color,
        }],
        "graphs": [{
            "fillAlphas": 1,
            "lineAlpha": 0.2,
            "type": "column",
            "fixedColumnWidth" :30,
            "valueField": "value",
            "labelsEnabled": false,
            "axisColor":"white",
            "fillColorsField": "color",
            "labelText": "[[value]]",
            "labelPosition": "middle",
            "color": "#fff"
        }],
        "depth3D": 20,
        "labelsEnabled": false,
        "angle": 30,
        "categoryField": "visit",
        "categoryAxis": {
            "gridPosition": "start",
            "fillAlpha": 0.05,
            "position": "left",
            "labelsEnabled": false,
        },
        "valueAxes": [
          {
            "labelsEnabled": false,
          }
        ]
    
    } );



   
  }




  ngOnInit() {

    

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
        })

    })
          
  }

  

}
