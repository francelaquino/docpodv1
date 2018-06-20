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
import {DataTableModule,SharedModule,MenubarModule ,MessageModule,MenuModule,GrowlModule,CalendarModule,DialogModule} from 'primeng/primeng';
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
import { HealthscoreV1Component } from './visit/healthscore-v1/healthscore-v1.component';
import { CvdscoreV1Component } from './visit/cvdscore-v1/cvdscore-v1.component';
import { PrediabeticscoreV1Component } from './visit/prediabeticscore-v1/prediabeticscore-v1.component';
import { OverallscoreV1Component } from './visit/overallscore-v1/overallscore-v1.component';
import { GoalreportV1Component } from './goalsetting/goalreport-v1/goalreport-v1.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    PatientregistrationComponent,
    PatientsearchComponent,
    PatientupdateComponent,
    MainmenuComponent,
    PatientvisitComponent,
    ResultComponent,
    SurveyV1Component,
    HealthscoreV1Component,
    CvdscoreV1Component,
    PrediabeticscoreV1Component,
    OverallscoreV1Component,
    GoalreportV1Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,AppRouting,BrowserAnimationsModule,DataTableModule,SharedModule,MenuModule,CalendarModule,DialogModule,FormsModule,
    ReactiveFormsModule,HttpModule,HttpClientModule,ModalModule.forRoot(),TableModule,ToolbarModule,MessageModule,GrowlModule
  ],
  entryComponents: [
    PatientupdateComponent,ResultComponent,SurveyV1Component,HealthscoreV1Component,CvdscoreV1Component,PrediabeticscoreV1Component,OverallscoreV1Component
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [DataService,PatientService,Utilities],
  bootstrap: [AppComponent]
})
export class AppModule { }
