

import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';
import { PatientService} from '../../services/patient.service';
import { FormGroup,FormBuilder, FormControl} from '@angular/forms';
import { Utilities } from '../../shared/utilities';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';
import { ResultComponent } from '../../visit/result/result.component';
import { SurveyV1Component } from '../../visit/survey-v1/survey-v1.component';
import { HealthscoreV1Component } from '../../visit/healthscore-v1/healthscore-v1.component';
import { CvdscoreV1Component } from '../../visit/cvdscore-v1/cvdscore-v1.component';
import { PrediabeticscoreV1Component } from '../../visit/prediabeticscore-v1/prediabeticscore-v1.component';
import { OverallscoreV1Component } from '../../visit/overallscore-v1/overallscore-v1.component';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-patientvisit',
  templateUrl: './patientvisit.component.html',
  styleUrls: ['./patientvisit.component.css']
})
export class PatientvisitComponent implements OnInit {
  public selectedRows:any=[];
  public form:FormGroup;
  public medicalno:string="";
  public visitno:string="";
  patientorders:any=[];
  bsModalRef: BsModalRef;
  constructor(public utility:Utilities, public dataService:DataService,public patientService:PatientService, private fb:FormBuilder,private modalService: BsModalService) { }

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

      $(".ifSelected").attr('disabled','disabled');
    }

    reloadVisit(){
      this.medicalno="";
      this.visitno="";
      this.selectedRows=[];
      this.patientorders=[];
      $(".ifSelected").attr('disabled','disabled');
      this.patientService.getPatientOrders(this.form.value.medicalno).subscribe(response => {
        this.patientorders=response;
       });
       
    }

    onRowSelect(event){
      this.medicalno=event.data.medicalno;
      this.visitno=event.data.visitno;
      $('.ifSelected').removeAttr('disabled');

    }
  
    public updateMainOrder() {
    
      this.bsModalRef = this.modalService.show(ResultComponent, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
        this.bsModalRef.content.medicalno = this.medicalno;
        this.bsModalRef.content.visitno = this.visitno;
  }

  
public showBaselineReport(){
  var win = window.open("../reports/baselinereport?mrno="+this.medicalno+"&visitno="+this.visitno);
}

public showBaselineDescReport(){
  var win = window.open("../reports/baselinedescriptivereport?mrno="+this.medicalno+"&visitno="+this.visitno);
}
public showCVDReport(){
  var win = window.open("../reports/cvdreport?mrno="+this.medicalno+"&visitno="+this.visitno);
}
public showPreDiabeticReport(){
  var win = window.open("../reports/prediabeticreport?mrno="+this.medicalno+"&visitno="+this.visitno);
}




  public showSurvey_v1() {
      
    this.bsModalRef = this.modalService.show(SurveyV1Component, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-questioanaire'});
    this.bsModalRef.content.medicalno = this.medicalno;
    this.bsModalRef.content.visitno = this.visitno;
}

public showHealthScore_v1() {
      
  this.bsModalRef = this.modalService.show(HealthscoreV1Component, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
    this.bsModalRef.content.medicalno = this.medicalno;
    this.bsModalRef.content.visitno = this.visitno;
}


public showCVDScore_v1() {
      
  this.bsModalRef = this.modalService.show(CvdscoreV1Component, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
    this.bsModalRef.content.medicalno = this.medicalno;
    this.bsModalRef.content.visitno = this.visitno;
}



public showPreDiabeticScore_v1() {
    
  this.bsModalRef = this.modalService.show(PrediabeticscoreV1Component, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
    this.bsModalRef.content.medicalno = this.medicalno;
    this.bsModalRef.content.visitno = this.visitno;
}


public showOverAllScore_v1() {
    
  this.bsModalRef = this.modalService.show(OverallscoreV1Component, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
    this.bsModalRef.content.medicalno = this.medicalno;
    this.bsModalRef.content.visitno = this.visitno;
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
    
    this.patientService.getPatientOrders(this.form.value.medicalno).subscribe(response => {
      this.patientorders=response;
     });
  })
}

onClear(){
  this.patientorders=[]
  this.form.reset();
}
createPatientVisit() {
  
  this.patientService.createPatientVisit(this.form.value).subscribe(response => {
    this.utility.toggleSuccess(response);
    this.patientService.getPatientOrders(this.form.value.medicalno).subscribe(response => {
      this.patientorders=response;
     });
  });
}

deleteVisit(){
  if(this.medicalno!="" || this.visitno!=""){
    if (confirm('Are you sure you want to save this thing into the database?')) {
      this.patientService.deleteVisit(this.medicalno,this.visitno).subscribe(response => {
        this.reloadVisit();
      });
    }
  }
}




}

