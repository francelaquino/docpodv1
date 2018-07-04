import { Component, OnInit } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
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
  private chart: AmChart;
  isloading:boolean=true;
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

      this.patientService.getSurvey_v1(this.medicalno,this.visitno).subscribe(response => {
        if(response.alreadyhavediabetic=="Y"){
        this.alreadyhavediabetic="Yes";
        }else{
          this.alreadyhavediabetic="No";
        }
       });
      this.patientService.getHealthScore_v1(this.medicalno,this.visitno).subscribe(response => {
        this.healthscore=response;
        this.healthscore.forEach(result => {
          this.totalpoints=this.totalpoints+Number(result.result_points);
          this.totalhealthpoints=this.totalhealthpoints+Number(result.target_points);
          
         })
       });
      
    })

    setTimeout(() => {
      this.setCHart();
      $("a[title='JavaScript charts']").remove();
      $(".loading").hide();
      $(".report").show();
    }, 3000);
    
     
    
    
  }

  setCHart(){
  
    this.chart = this.AmCharts.makeChart("chart", {
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
  
   
  }

}
