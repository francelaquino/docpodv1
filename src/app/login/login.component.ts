import { Component,  OnInit,Input } from '@angular/core';
import { FormGroup,FormBuilder, FormControl,Validators } from '@angular/forms';
import { Message } from 'primeng/primeng';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  public msgs: Message[] = [];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form= this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
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

  
  onSubmit() {
    this.msgs = [];
    
    if (this.form.valid) {
      if(this.form.get("username").value!="admin" && this.form.get("password").value!="admin101"){
        this.msgs.push({severity:'error',detail:'Invalid username or wrong password'});
      }  
    } else {
      Object.keys(this.form.controls).forEach(field => { 
        const control = this.form.get(field);            
        control.markAsTouched({ onlySelf: true });       
      });
    }
  }

}
