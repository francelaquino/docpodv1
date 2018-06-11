
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';
import { PatientService} from '../../services/patient.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-survey-v1',
  templateUrl: './survey-v1.component.html',
  styleUrls: ['./survey-v1.component.css']
})
export class SurveyV1Component implements OnInit {
  public form:FormGroup;
  public medicalno:string;
  public visitno:string;
  constructor( public bsModalRef: BsModalRef,private fb:FormBuilder,public patientService:PatientService) { }

  ngOnInit() {
    this.medicalno="";
    this.visitno="";
    this.form= this.fb.group({
      medicalno: [''],
      visitno: [''],
      diabeteswhenpregnant: ['', Validators.required],
      alreadyhavediabetic: ['', Validators.required],
      typeofdiabetic: ['', Validators.required],
      familywithdiabetic: ['', Validators.required],
      familyheartdesease: ['', Validators.required],
      diagnosedwithhighbloodpressure: ['', Validators.required],
      physicallyactive: ['', Validators.required],
      doyousmokecigarette: ['', Validators.required],
      doyousmokeshisha: ['', Validators.required],
      typeofexercise: ['', Validators.required],
      exerciseperweek30min: ['', Validators.required],
      exerciseperweek15min: ['', Validators.required],
      doyousmoke: ['', Validators.required],
    
    });
    setTimeout(() => {
      this.getSurvey_v1(this.medicalno,this.visitno);
    }, 0);
    



  }


  getSurvey_v1(medicalno:string,visitno:string) {
    this.patientService.getSurvey_v1(medicalno,visitno).subscribe(response => {
      this.form.patchValue({
        medicalno: response.medicalno,
        visitno: response.visitno,
        id: response.id,
        diabeteswhenpregnant: response.diabeteswhenpregnant,
        alreadyhavediabetic: response.alreadyhavediabetic,
        typeofdiabetic: response.typeofdiabetic,
        familywithdiabetic: response.familywithdiabetic,
        typeofexercise: response.typeofexercise,
        exerciseperweek30min: response.exerciseperweek30min,
        exerciseperweek15min: response.exerciseperweek15min,
        familyheartdesease: response.familyheartdesease,
        diagnosedwithhighbloodpressure: response.diagnosedwithhighbloodpressure,
        physicallyactive: response.physicallyactive,
        doyousmokecigarette: response.doyousmokecigarette,
        doyousmokeshisha: response.doyousmokeshisha,
        doyousmoke: response.doyousmoke,
        
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

  updateValidation(control){
    

  }

  onSubmit(){

      if(this.form.get("doyousmoke").value=="N"){
        this.form.get('doyousmokecigarette').clearValidators();
        this.form.get('doyousmokecigarette').updateValueAndValidity();
        this.form.get('doyousmokeshisha').clearValidators();
        this.form.get('doyousmokeshisha').updateValueAndValidity();
        this.form.patchValue({
          doyousmokecigarette: '',
          doyousmokeshisha: ''
        })
      }else{
        this.form.get('doyousmokecigarette').setValidators([Validators.required]);
        this.form.get('doyousmokecigarette').updateValueAndValidity();
        this.form.get('doyousmokeshisha').setValidators([Validators.required]);
        this.form.get('doyousmokeshisha').updateValueAndValidity();
      }

      if(this.form.get("physicallyactive").value=="N"){
        this.form.get('typeofexercise').clearValidators();
        this.form.get('typeofexercise').updateValueAndValidity();
        this.form.get('exerciseperweek30min').clearValidators();
        this.form.get('exerciseperweek30min').updateValueAndValidity();
        this.form.get('exerciseperweek15min').clearValidators();
        this.form.get('exerciseperweek15min').updateValueAndValidity();

        this.form.patchValue({
          typeofexercise: '',
          exerciseperweek30min: '',
          exerciseperweek15min: ''
        })
        
      }else{
        this.form.get('typeofexercise').setValidators([Validators.required]);
        this.form.get('typeofexercise').updateValueAndValidity();
        this.form.get('exerciseperweek30min').setValidators([Validators.required]);
        this.form.get('exerciseperweek30min').updateValueAndValidity();
        this.form.get('exerciseperweek15min').setValidators([Validators.required]);
        this.form.get('exerciseperweek15min').updateValueAndValidity();
      }
      if(this.form.get("physicallyactive").value=="Y"){
        if(this.form.get("typeofexercise").value=="Moderate"){
          this.form.get('exerciseperweek30min').setValidators([Validators.required]);
          this.form.get('exerciseperweek30min').updateValueAndValidity();
          this.form.get('exerciseperweek15min').clearValidators();
          this.form.get('exerciseperweek15min').updateValueAndValidity();

          this.form.patchValue({
            exerciseperweek15min: '',
          })
          
        }else{
          this.form.get('exerciseperweek15min').setValidators([Validators.required]);
          this.form.get('exerciseperweek15min').updateValueAndValidity();
          this.form.get('exerciseperweek30min').clearValidators();
          this.form.get('exerciseperweek30min').updateValueAndValidity();
          this.form.patchValue({
            exerciseperweek30min: '',
          })
        }
      }
      
      if(this.form.get("alreadyhavediabetic").value=="N"){
        this.form.get('typeofdiabetic').clearValidators();
        this.form.get('typeofdiabetic').updateValueAndValidity();
        this.form.patchValue({
          typeofdiabetic: '',
        })
      }else{
        this.form.get('typeofdiabetic').setValidators([Validators.required]);
        this.form.get('typeofdiabetic').updateValueAndValidity();
      }

    
    this.form.patchValue({
      medicalno: this.medicalno,
      visitno: this.visitno
    })
    if (this.form.valid) {
      
      this.patientService.saveSurvey_v1(this.form.value).subscribe(response => {
       
      });
      

    } else {
      Object.keys(this.form.controls).forEach(field => { 
        const control = this.form.get(field);            
        control.markAsTouched({ onlySelf: true });       
      });
    }
  }

}
