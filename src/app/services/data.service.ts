import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
  
  http:any;
  baseUrl:String;
  constructor(http:HttpClient) { 
    
    this.http=http;
//    this.baseUrl="http://precisionmedicalhealth.com/docpodapi/index.php/api";  
    //this.baseUrl="http://uniserb.com/docpodapi/index.php/api";  
    
    this.baseUrl="http://localhost:8080/api.docpod/index.php/api";  

  }

  getMaritalStatus(){
    return this.http.get(this.baseUrl+'/'+'data/getmaritalstatus')

   /* return this.http.get(this.baseUrl+'/'+'data/getmaritalstatus')
    .map((res) => res.json());*/
  }

  getCountry(){
    return this.http.get(this.baseUrl+'/'+'data/getcountry')
  }

}
