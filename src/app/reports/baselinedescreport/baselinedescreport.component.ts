import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-baselinedescreport',
  templateUrl: './baselinedescreport.component.html',
  styleUrls: ['./baselinedescreport.component.css']
})
export class BaselinedescreportComponent implements OnInit {

  medicalno:string;
  visitno:string;
  patientinfo:any=[]
  isloading:boolean=true;
  public hdlc_points:string="";
  public ldlc_points:string="";
  public totalcholesterol_points:string="";
  public triglycerides_points:string="";
  public hba1c_points:string="";
  public bmi_points:string="";
  public exercise_points:string="";
  public smoker_shisha_points:string="";
  public smoker_cigarette_points:string="";
  public bp_points:string="";

  public hdlc_message:string="";
  public ldlc_message:string="";
  public totalcholesterol_message:string="";
  public triglycerides_message:string="";
  public hba1c_message:string="";
  public bmi_message:string="";
  public exercise_message:string="";
  public smoker_shisha_message:string="";
  public smoker_cigarette_message:string="";
  public bp_message:string="";

  public hdlc:string="";
  public ldlc:string="";
  public totalcholesterol:string="";
  public triglycerides:string="";
  public hba1c:string="";
  public bmi:string="";
  public bp:string="";

  private chartHDLC: AmChart;
  private chartLDLC: AmChart;
  private chartCholesterol: AmChart;
  private chartTriglycerides: AmChart;
  private chartHba1c: AmChart;
  private chartCigarette: AmChart;
  private chartShisha: AmChart;
  private chartExercise: AmChart;
  private chartBP: AmChart;
  visitdate:string="";
  constructor(private AmCharts: AmChartsService,private patientService:PatientService,private route: ActivatedRoute) { }

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
      this.patientService.getDocPodReport_v1(this.medicalno,this.visitno).subscribe(response => {
        response.forEach( (visit) => {
            if(visit.test=="HDLC"){
              this.hdlc=visit.test+" : "+visit.result+visit.unit;
              this.hdlc_points=visit.result_points;
              this.hdlc_message=visit.result1+". "+visit.message;
            }else if(visit.test=="LDLC"){
              this.ldlc=visit.test+" : "+visit.result+visit.unit;
              this.ldlc_points=visit.result_points;
              this.ldlc_message=visit.result1+". "+visit.message;
            }else if(visit.test=="BMI"){
              this.bmi=visit.test+" : "+visit.result+visit.unit;
              this.bmi_points=visit.result_points;
              this.bmi_message=visit.result1+". "+visit.message;
            }else if(visit.test=="Cholesterol"){
              this.totalcholesterol=visit.test+" : "+visit.result+visit.unit;
              this.totalcholesterol_points=visit.result_points;
              this.totalcholesterol_message=visit.result1+". "+visit.message;
            }else if(visit.test=="Triglycerides"){
              this.triglycerides=visit.test+" : "+visit.result+visit.unit;
              this.triglycerides_points=visit.result_points;
              this.triglycerides_message=visit.result1+". "+visit.message;
            }else if(visit.test=="HbA1c"){
              this.hba1c=visit.test+" : "+visit.result+visit.unit;
              this.hba1c_points=visit.result_points;
              this.hba1c_message=visit.result1+". "+visit.message;
            }else if(visit.test=="Blood Pressure"){
              this.bp=visit.test+" : "+visit.result+visit.unit;
              this.bp_points=visit.result_points;
              this.bp_message=visit.result1+". "+visit.message;
            }
            /*else if(visit.test=="Smoking Cigarettes"){
              this.smoker_cigarette_points=visit.result_points;
              this.smoker_cigarette_message=visit.result1+". "+visit.message;
            }else if(visit.test=="Smoking Shisha"){
              this.smoker_shisha_points=visit.result_points;
              this.smoker_shisha_message=visit.result1+". "+visit.message;
            }else if(visit.test=="Moderate Exercise" || visit.test=="Vigorous Exercise"){
              this.exercise_points=visit.result_points;
              this.exercise_message=visit.result1+". "+visit.message;
  
        }*/
        })
        
        setTimeout(() => {
          this.setChart();
          $("a[title='JavaScript charts']").remove();
          $(".loading").hide();
          $(".report").show();
        }, 3000);

        
      
    })
  })
  }

  setChart(){
    this.chartBP = this.AmCharts.makeChart("chartBP", {
      "type": "gauge",
      "theme": "light",
      "axes": [ {
        "axisThickness": 1,
        "axisAlpha": 0.2,
        "tickAlpha": 0.2,
        "valueInterval": 5,
        "bands": [ {
          "color": "#0000ff",
          "endValue": 10,
          "innerRadius": "70%",
          "startValue": 0
        }, {
          "color": "#008000",
          "endValue": 30,
          "innerRadius": "70%",
          "startValue": 10
        }, {
          "color": "#ffbf00",
          "endValue": 40,
          "innerRadius": "70%",
          "startValue": 30
        },
        {
          "color": "#ff0000",
          "endValue": 60,
          "innerRadius": "70%",
          "startValue": 40
        } ],
        "bottomText": "",
        "bottomTextYOffset": -20,
        "endValue": 60
      } ],
      "arrows": [ {
        "innerRadius": "0%",
        "nailRadius": 0,
        "radius": "85%"
      } ],
      
   });
   this.chartHDLC = this.AmCharts.makeChart("chartHDLC", {
    "type": "gauge",
    "theme": "light",
    "axes": [ {
      "axisThickness": 1,
      "axisAlpha": 0.2,
      "tickAlpha": 0.2,
      "valueInterval": 5,
      "bands": [ {
        "color": "#008000",
        "endValue": 10,
        "innerRadius": "70%",
        "startValue": 0
      }, {
        "color": "#ffbf00",
        "endValue": 30,
        "innerRadius": "70%",
        "startValue": 10
      },
      {
        "color": "#ff0000",
        "endValue": 60,
        "innerRadius": "70%",
        "startValue": 30
      } ],
      "bottomText": "",
      "bottomTextYOffset": -20,
      "endValue": 60
    } ],
    "arrows": [ {
      "innerRadius": "0%",
      "nailRadius": 0,
      "radius": "85%"
    } ],
    
 });
 
 this.chartLDLC = this.AmCharts.makeChart("chartLDLC", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 5,
    "bands": [ {
      "color": "#008000",
      "endValue": 10,
      "innerRadius": "70%",
      "startValue": 0
    }, {
      "color": "#ffbf00",
      "endValue": 30,
      "innerRadius": "70%",
      "startValue": 10
    },
    {
      "color": "#ff0000",
      "endValue": 60,
      "innerRadius": "70%",
      "startValue": 30
    } ],
    "bottomText": "",
    "bottomTextYOffset": -20,
    "endValue": 60
  } ],
  "arrows": [ {
    "innerRadius": "0%",
    "nailRadius": 0,
    "radius": "85%"
  } ],
  
});

this.chartTriglycerides = this.AmCharts.makeChart("chartTriglycerides", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 5,
    "bands": [ {
      "color": "#008000",
      "endValue": 10,
      "innerRadius": "70%",
      "startValue": 0
    }, {
      "color": "#ffbf00",
      "endValue": 30,
      "innerRadius": "70%",
      "startValue": 10
    },
    {
      "color": "#ff0000",
      "endValue": 60,
      "innerRadius": "70%",
      "startValue": 30
    } ],
    "bottomText": "",
    "bottomTextYOffset": -20,
    "endValue": 60
  } ],
  "arrows": [ {
    "innerRadius": "0%",
    "nailRadius": 0,
    "radius": "85%"
  } ],
  
});


this.chartCholesterol = this.AmCharts.makeChart("chartCholesterol", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 5,
    "bands": [ {
      "color": "#008000",
      "endValue": 10,
      "innerRadius": "70%",
      "startValue": 0
    }, {
      "color": "#ffbf00",
      "endValue": 30,
      "innerRadius": "70%",
      "startValue": 10
    },
    {
      "color": "#ff0000",
      "endValue": 60,
      "innerRadius": "70%",
      "startValue": 30
    } ],
    "bottomText": "",
    "bottomTextYOffset": -20,
    "endValue": 60
  } ],
  "arrows": [ {
    "innerRadius": "0%",
    "nailRadius": 0,
    "radius": "85%"
  } ],
  
});


this.chartHba1c = this.AmCharts.makeChart("chartHba1c", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 10,
    "bands": [ {
      "color": "#008000",
      "endValue": 10,
      "innerRadius": "70%",
      "startValue": 0
    }, {
      "color": "#ffea00",
      "endValue": 30,
      "innerRadius": "70%",
      "startValue": 10
    }
    , {
      "color": "#ffbf00",
      "endValue": 50,
      "innerRadius": "70%",
      "startValue": 30
    },
    {
      "color": "#ff0000",
      "endValue": 150,
      "innerRadius": "70%",
      "startValue": 50
    } ],
    "bottomText": "",
    "bottomTextYOffset": -20,
    "endValue": 150
  } ],
  "arrows": [ {
    "innerRadius": "0%",
    "nailRadius": 0,
    "radius": "85%"
  } ],
  
});
/*
this.chartCigarette = this.AmCharts.makeChart("chartCigarette", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 5,
    "bands": [ {
      "color": "#008000",
      "endValue": 10,
      "innerRadius": "70%",
      "startValue": 0
    }, {
      "color": "#ffbf00",
      "endValue": 30,
      "innerRadius": "70%",
      "startValue": 10
    },
    {
      "color": "#ff0000",
      "endValue": 60,
      "innerRadius": "70%",
      "startValue": 30
    } ],
    "bottomText": "",
    "bottomTextYOffset": -20,
    "endValue": 60
  } ],
  "arrows": [ {} ],
  
});

this.chartShisha = this.AmCharts.makeChart("chartShisha", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 5,
    "bands": [ {
      "color": "#008000",
      "endValue": 10,
      "innerRadius": "70%",
      "startValue": 0
    }, {
      "color": "#ffbf00",
      "endValue": 30,
      "innerRadius": "70%",
      "startValue": 10
    },
    {
      "color": "#ff0000",
      "endValue": 60,
      "innerRadius": "70%",
      "startValue": 30
    } ],
    "bottomText": "",
    "bottomTextYOffset": -20,
    "endValue": 60
  } ],
  "arrows": [ {} ],
  
});


this.chartExercise = this.AmCharts.makeChart("chartExercise", {
  "type": "gauge",
  "theme": "light",
  "axes": [ {
    "axisThickness": 1,
    "axisAlpha": 0.2,
    "tickAlpha": 0.2,
    "valueInterval": 5,
    "bands": [ {
      "color": "#008000",
      "endValue": 10,
      "innerRadius": "70%",
      "startValue": 0
    }, {
      "color": "#ffbf00",
      "endValue": 30,
      "innerRadius": "70%",
      "startValue": 10
    },
    {
      "color": "#ff0000",
      "endValue": 60,
      "innerRadius": "70%",
      "startValue": 30
    } ],
    "bottomText": "",
    "bottomTextYOffset": -20,
    "endValue": 60
  } ],
  "arrows": [ {} ],
  
});
*/

  /*this.chartExercise.arrows[0].setValue(this.exercise_points);
  this.chartShisha.arrows[0].setValue(this.smoker_shisha_points);
  this.chartCigarette.arrows[0].setValue(this.smoker_cigarette_points);*/
  this.chartHba1c.arrows[0].setValue(this.hba1c_points);
  this.chartCholesterol.arrows[0].setValue(this.totalcholesterol_points);
  this.chartTriglycerides.arrows[0].setValue(this.triglycerides_points);
   this.chartLDLC.arrows[0].setValue(this.ldlc_points);
   this.chartHDLC.arrows[0].setValue(this.hdlc_points);
   this.chartBP.arrows[0].setValue(this.bp_points);
   setTimeout(() => {
    $("a[title='JavaScript charts']").remove();
  }, 1000);
  }
}


