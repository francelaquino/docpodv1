import { Component, OnInit,Input } from '@angular/core';
import { PatientService} from '../../services/patient.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { PatientupdateComponent } from '../../patient/patientupdate/patientupdate.component';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-patientsearch',
  templateUrl: './patientsearch.component.html',
  styleUrls: ['./patientsearch.component.css']
})
export class PatientsearchComponent implements OnInit {
  public medicalno:string="";
  public gid:string="";
  patients:any=[];
  public selectedRows:any;
  bsModalRef: BsModalRef;
  constructor(public patientService:PatientService,private modalService: BsModalService) { }

  ngOnInit() {
    
    this.getPatient();
  }

  reloadPatient(){
    this.selectedRows=[];
    this.medicalno="";
    this.getPatient();
  }

  public openEditDialog() {
    
    this.bsModalRef = this.modalService.show(PatientupdateComponent, {animated: true, keyboard: true, backdrop: true, ignoreBackdropClick: false,class: 'modal-xl'});
      this.bsModalRef.content.id = this.medicalno;
      this.bsModalRef.content.gid = this.gid;
}

  getPatient(){
    this.patients=[];
     this.patientService.getPatient().subscribe(response => {
      this.patients=response;
     });
 
   }

   onRowSelect(event) {
    this.medicalno=event.data.medicalno;
    this.gid=event.data.gid;
  }

}
