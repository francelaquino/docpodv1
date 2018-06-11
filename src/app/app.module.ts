import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { DataService } from './services/data.service'
import { PatientService } from './services/patient.service'
import { Utilities } from './shared/utilities'
import { Http,HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import {DataTableModule,SharedModule,MenubarModule ,MenuModule,GrowlModule,CalendarModule,DialogModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import { AppComponent } from './app.component';
import { PatientregistrationComponent } from './patient/patientregistration/patientregistration.component';
import { PatientsearchComponent } from './patient/patientsearch/patientsearch.component';
import { PatientupdateComponent } from './patient/patientupdate/patientupdate.component';
import { AppRouting } from './shared/approutes';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { PatientvisitComponent } from './visit/patientvisit/patientvisit.component';
import { ResultComponent } from './visit/result/result.component';
import { SurveyV1Component } from './visit/survey-v1/survey-v1.component';
@NgModule({
  declarations: [
    AppComponent,
    PatientregistrationComponent,
    PatientsearchComponent,
    PatientupdateComponent,
    MainmenuComponent,
    PatientvisitComponent,
    ResultComponent,
    SurveyV1Component
  ],
  imports: [
    BrowserModule,AppRouting,BrowserAnimationsModule,DataTableModule,SharedModule,MenuModule,CalendarModule,DialogModule,FormsModule,
    ReactiveFormsModule,HttpModule,HttpClientModule,ModalModule.forRoot(),TableModule,ToolbarModule
  ],
  entryComponents: [
    PatientupdateComponent,ResultComponent,SurveyV1Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [DataService,PatientService,Utilities],
  bootstrap: [AppComponent]
})
export class AppModule { }
