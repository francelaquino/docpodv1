

import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/data.service';
import { PatientService} from '../../services/patient.service';
import { FormGroup,FormBuilder, FormControl} from '@angular/forms';
import { Utilities } from '../../shared/utilities';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';
//import { HealthscoreV1Component } from '../../patientorder/healthscore-v1/healthscore-v1.component';
//import { CvdscoreV1Component } from '../../patientorder/cvdscore-v1/cvdscore-v1.component';
//import { DocpodreportV1Component } from '../../patientorder/docpodreport-v1/docpodreport-v1.component';
//import { PrediabeticV1Component } from '../../patientorder/prediabetic-v1/prediabetic-v1.component';
import { ResultComponent } from '../../visit/result/result.component';
import { SurveyV1Component } from '../../visit/survey-v1/survey-v1.component';

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
    }

    reloadVisit(){
      this.medicalno="";
      this.visitno="";
      this.selectedRows=[];
      this.patientorders=[];
      this.patientService.getPatientOrders(this.form.value.medicalno).subscribe(response => {
        this.patientorders=response;
       });
    }

    onRowSelect(event){
      this.medicalno=event.data.medicalno;
      this.visitno=event.data.visitno;
    }
  
    public updateMainOrder() {
    
      this.bsModalRef = this.modalService.show(ResultComponent, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
        this.bsModalRef.content.medicalno = this.medicalno;
        this.bsModalRef.content.visitno = this.visitno;
  }

  public updateSurvey1() {
      
    this.bsModalRef = this.modalService.show(SurveyV1Component, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-questioanaire'});
    this.bsModalRef.content.medicalno = this.medicalno;
    this.bsModalRef.content.visitno = this.visitno;
}

    /*
  public showHealthScore_v1(medicalno:string,visitno:string) {
      
    this.bsModalRef = this.modalService.show(HealthscoreV1Component, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
      this.bsModalRef.content.medicalno = medicalno;
      this.bsModalRef.content.visitno = visitno;
}
public showCVDScore_v1(medicalno:string,visitno:string) {
      
  this.bsModalRef = this.modalService.show(CvdscoreV1Component, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
    this.bsModalRef.content.medicalno = medicalno;
    this.bsModalRef.content.visitno = visitno;
}
 
public showDocPodReport_v1(medicalno:string,visitno:string) {
    
  this.bsModalRef = this.modalService.show(DocpodreportV1Component, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
    this.bsModalRef.content.medicalno = medicalno;
    this.bsModalRef.content.visitno = visitno;
}
public showPrediabetic_v1(medicalno:string,visitno:string) {
    
  this.bsModalRef = this.modalService.show(PrediabeticV1Component, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
    this.bsModalRef.content.medicalno = medicalno;
    this.bsModalRef.content.visitno = visitno;
}

*/
  

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




}

