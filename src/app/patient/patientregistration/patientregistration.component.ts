import { Component, ViewChild , OnInit,Input } from '@angular/core';
import { DataService} from '../../services/data.service';
import { PatientService} from '../../services/patient.service';
import { FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';
import { Utilities } from '../../shared/utilities';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-patientregistration',
  templateUrl: './patientregistration.component.html',
  styleUrls: ['./patientregistration.component.css']
})
export class PatientregistrationComponent implements OnInit {
  public form:FormGroup;
  maritalstatuses:any;
  countries:any;
  alertMessage:string;
  birthdate: string = "";
  monthShortNames: any = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  public displayDialog:boolean=false;

 

  constructor(public utility:Utilities, public dataService:DataService,public patientService:PatientService, private fb:FormBuilder) { }

  onSelectMethod(event) {
    let d = new Date(Date.parse(event));
    this.birthdate = `${d.getDate()}-${this.monthShortNames[d.getMonth()]}-${d.getFullYear()}`;
  }

  ngOnInit() {
    this.form= this.fb.group({
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
      emailaddress: ['', Validators.compose([Validators.required,Validators.email])],
      address1: new FormControl("",Validators.compose([Validators.required])),
      company: new FormControl("",Validators.compose([Validators.required])),
      address2: [''],
      birthdate: [''],
      employeeno: ['']
    });
    this.getFormData();

    
  
    
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

  onClear(){
    
        this.form.reset();
        document.getElementById('firstname').focus();
        $("#btnSubmit").prop("disabled",false);
      }


  getFormData(){
    this.dataService.getMaritalStatus().subscribe(response => {
      this.maritalstatuses=response;
    });

    this.dataService.getCountry().subscribe(response => {
      this.countries=response;
    });
  }

  onSubmit() {
   
    if (this.form.valid) {
      
      this.form.patchValue({
        birthdate: this.birthdate,
      })


      this.patientService.savePatientRegistration(this.form.value).subscribe(response => {
        alert(response)
        $("#btnSubmit").prop("disabled",true);

       // this.alertMessage=response;
        //this.displayDialog=true;
        
      });

    } else {
      Object.keys(this.form.controls).forEach(field => { 
        const control = this.form.get(field);            
        control.markAsTouched({ onlySelf: true });       
      });
    }
  }

}
