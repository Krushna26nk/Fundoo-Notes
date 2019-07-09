import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {MatIconModule,MatSidenavModule,MatToolbarModule,MatMenuModule,MatListModule} from '@angular/material';
import {MatCardModule,MatButtonModule,MatRadioModule,MatDialogModule} from '@angular/material';
import {MatInputModule,MatTooltipModule,MatSnackBarModule} from '@angular/material';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { ArchievComponent } from './components/archiev/archiev.component';
import { TrashComponent } from './components/trash/trash.component';
import { RemainderComponent } from './components/remainder/remainder.component';
import { LabelsComponent } from './components/labels/labels.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { EditnotesComponent } from './components/editnotes/editnotes.component';

const routes:Routes =[
  { path:'',component:RegistrationComponent},
  { path:'register',component:RegistrationComponent},
  { path:'login',component:LoginComponent},
  { path:'forget',component:ForgetpasswordComponent},
  { path:'reset',component:ResetpasswordComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    { path:'',component : NotesComponent},
    { path:'notes',component : NotesComponent},
    { path:'archives',component:ArchievComponent},
    { path:'trash',component:TrashComponent},
    { path:'label', component:LabelsComponent},
    { path:'remainder',component:RemainderComponent}
  ]},
  
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotesComponent,
    ArchievComponent,
    TrashComponent,
    RemainderComponent,
    LabelsComponent,
    LoginComponent,
    RegistrationComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent,
    EditnotesComponent
  ],
  entryComponents:[EditnotesComponent],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(routes,{
      onSameUrlNavigation: 'reload'
    }),MatTooltipModule,ReactiveFormsModule,HttpClientModule,
    BrowserAnimationsModule,MatListModule,MatRadioModule,FormsModule,MatInputModule,MatButtonModule,MatSnackBarModule,
    MatCardModule,MatIconModule,MatSidenavModule,MatToolbarModule,MatMenuModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
