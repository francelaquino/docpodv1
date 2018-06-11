import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import {  FormGroup,  FormBuilder,  FormControl,  Validators } from '@angular/forms';
import {  PatientService} from '../../services/patient.service';
import {  DataService} from '../../services/data.service';
import { Utilities } from '../../shared/utilities';
import { ModalDirective } from 'ngx-bootstrap';
import { BsModalRef } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-patientupdate',
  templateUrl: './patientupdate.component.html',
  styleUrls: ['./patientupdate.component.css']
})
export class PatientupdateComponent implements OnInit {
  public id:string;
  public gid:string;
  public form: FormGroup;
  public displayDialog:boolean=false;
  civilStatus: any;
  countries: any;
  birthdate: string = "";
  monthShortNames: any = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


  constructor(private el: ElementRef,public bsModalRef: BsModalRef,public utility:Utilities,public dataService: DataService, private fb: FormBuilder, public patientService: PatientService) { }
  ngOnInit() {
    
    this.initForm();
    this.getFormData();
    setTimeout(() => {
      this.getPatientDetails(this.id,this.gid);
      
    }, 0);
    
    

  }
  onShow() {
    setTimeout(() =>{
     },10);
}


  initForm() {
    this.form = this.fb.group({
      gid: [''],
      medicalno: [{
        value: ''
      }],
      firstname: ['', Validators.required],
      secondname: ['', Validators.required],
      lastname: ['', Validators.required],
      grandfathername: [''],
      gender: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      maritalstatus: ['', Validators.required],
      nationality: ['', Validators.required],
      homephone: [''],
      mobileno: ['', Validators.required],
      emailaddress: ['', Validators.compose([Validators.required, Validators.email])],
      address1: new FormControl("", Validators.compose([Validators.required])),
      company: new FormControl("", Validators.compose([Validators.required])),
      active: new FormControl("", Validators.compose([Validators.required])),
      address2: [''],
      employeeno: [''],
      birthdate: ['']
    });
  }


  getFormData() {
   
   
    this.dataService.getMaritalStatus().subscribe(response => {
      this.civilStatus = response;
    });

    this.dataService.getCountry().subscribe(response => {
      this.countries = response;
    });
  }

  getPatientDetails(id:string,gid:string) {
    this.patientService.getPatientDetails(id,gid).subscribe(response => {
      this.birthdate=response.birthdate;
      this.form.patchValue({
        gid:  gid,
        medicalno: response.medicalno,
        firstname: response.firstname,
        nationality: response.nationality,
        address1: response.address1,
        address2: response.address2,
        dateofbirth: response.birthdate,
        company: response.company,
        emailaddress: response.emailaddress,
        employeeno: response.employeeno,
        gender: response.gender,
        grandfathername: response.grandfathername,
        homephone: response.homephone,
        lastname: response.lastname,
        maritalstatus: response.maritalstatus,
        mobileno: response.mobileno,
        secondname: response.secondname,
        active: response.active,
      })



    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  hasError(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  
  onSelectMethod(event) {
    let d = new Date(Date.parse(event));
    this.birthdate = `${d.getDate()}-${this.monthShortNames[d.getMonth()]}-${d.getFullYear()}`;
  }
  onSubmit() {
    
     if (this.form.valid) {
       
      this.form.patchValue({
        birthdate: this.birthdate,
      })
 
       this.patientService.updatePatientInformation(this.form.value).subscribe(response => {
        this.bsModalRef.hide();
       });
 
     } else {
       Object.keys(this.form.controls).forEach(field => { 
         const control = this.form.get(field);            
         control.markAsTouched({ onlySelf: true });       
       });
     }
   }


}
