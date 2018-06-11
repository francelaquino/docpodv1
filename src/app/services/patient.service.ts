import {  Http,  RequestOptions,  RequestMethod,  Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class PatientService {
  http: any;
  baseUrl: String;
  headers: Headers;
  options: RequestOptions;


  constructor(http: HttpClient) {


    this.http = http;
    this.baseUrl="http://localhost:8080/api.docpod/index.php/api";  
    //this.baseUrl="http://precisionmedicalhealth.com/docpodapi/index.php/api";  
    //this.baseUrl="http://uniserb.com/docpodapi/index.php/api";  
    
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });
    let options = new RequestOptions({
      headers: this.headers
    });


  }

  savePatientRegistration(data: any) {

    return this.http.post(this.baseUrl + '/' + 'patient/savepatientregistration', data, this.options)

  }

  createPatientVisit(data: any) {

    return this.http.post(this.baseUrl + '/' + 'visit/createpatientvisit', data, this.options)

  }

  updatePatientInformation(data: any) {

    return this.http.post(this.baseUrl + '/' + 'patient/updatepatientregistration', data, this.options)

  }

  getPatient() {
    return this.http.get(this.baseUrl + '/' + 'patient/getpatient')
  }

  getPatientDetails(id: string, gid: string) {
    return this.http.get(this.baseUrl + '/' + 'patient/getpatientdetails/' + id + '/' + gid)
  }

  getPatientDetailsMedicalNo(id: string) {
    return this.http.get(this.baseUrl + '/' + 'patient/getpatientdetails_view/' + id)
  }

  getPatientOrders(id: string) {
    return this.http.get(this.baseUrl + '/' + 'visit/getpatientvisits/' + id)
  }

  getAllPatientOrders() {
    return this.http.get(this.baseUrl + '/' + 'Patient/getAllPatientOrders')
  }


  saveSurvey_v1(data: any) {

    return this.http.post(this.baseUrl + '/' + 'visit/savesurvey_v1', data, this.options)

  }
  

  getDocPodReport_v1(medicalno: string, visitno: string) {
    return this.http.get(this.baseUrl + '/' + 'analysis/healthscore_v2/' + medicalno + '/' + visitno)
  }

  getSurvey_v1(medicalno: string, visitno: string) {
    return this.http.get(this.baseUrl + '/' + 'visit/getsurvey_v1/' + medicalno + '/' + visitno)
  }

  getPrediabeticScore_v1(medicalno: string, visitno: string) {
    return this.http.get(this.baseUrl + '/' + 'analysis/prediabetic_v1/' + medicalno + '/' + visitno)
  }
  

  updateResults(data: any) {
    
        return this.http.post(this.baseUrl + '/' + 'visit/updateresults', data, this.options)
    
      }

      getResults(medicalno: string, visitno: string) {
        return this.http.get(this.baseUrl + '/' + 'visit/getresults/' + medicalno + '/' + visitno)
      }
      getHealthScore_v1(medicalno: string, visitno: string) {
        return this.http.get(this.baseUrl + '/' + 'analysis/healthscore_v1/' + medicalno + '/' + visitno)
      }

      getCVDScore_v1(medicalno: string, visitno: string) {
        return this.http.get(this.baseUrl + '/' + 'analysis/cvdreport_v1/' + medicalno + '/' + visitno)
      }
      



}

