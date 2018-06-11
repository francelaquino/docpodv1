import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';
import { PatientService} from '../../services/patient.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public form:FormGroup;
  public medicalno:string;
  public visitno:string;
  constructor(public bsModalRef: BsModalRef,private fb:FormBuilder,public patientService:PatientService) { }

  ngOnInit() {
    this.form= this.fb.group({
      medicalno: [''],
      visitno: [''],
      hba1c: [''],
      hdlc: [''],
      triglycerides: [''],
      ldlc: [''],
      totalcholesterol: [''],
      bpsystolic: [''],
      bpdiastolic: [''],
      bmi: [''],
      waist: [''],
      height: [''],
      weight: [''],
    
    });

    setTimeout(() => {
      this.getResults(this.medicalno,this.visitno);
    }, 0);

  }



  getResults(medicalno:string,visitno:string) {
    this.patientService.getResults(medicalno,visitno).subscribe(response => {
      this.form.patchValue({
        medicalno: response.medicalno,
        visitno: response.visitno,
        hba1c: response.hba1c,
        hdlc: response.hdlc,
        triglycerides: response.triglycerides,
        ldlc: response.ldlc,
        totalcholesterol: response.totalcholesterol,
        bpsystolic: response.bpsystolic,
        bpdiastolic: response.bpdiastolic,
        bmi: response.bmi,
        waist: response.waist,
        height: response.height,
        weight: response.weight,
      })



    });
  }

  calculateBMI(){

    if(this.form.get("height").value=="" || this.form.get("weight").value==""){
      return false;
    }
    let bmi=this.form.get("weight").value/(this.form.get("height").value*this.form.get("height").value);

    this.form.patchValue({
      bmi: bmi
    })
  }

  onSubmit(){
    let bmi=this.form.get("weight").value/(this.form.get("height").value*this.form.get("height").value);

    this.form.patchValue({
      medicalno: this.medicalno,
      visitno: this.visitno,
      bmi: bmi
    })
      this.patientService.updateResults(this.form.value).subscribe(response => {
       alert("Visit results has been updated");
      });
      

  }


}
