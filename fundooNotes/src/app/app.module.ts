import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {FlexLayoutModule} from '@angular/flex-layout';

import {MatIconModule,MatSidenavModule,MatToolbarModule,MatMenuModule,MatListModule} from '@angular/material';
import {MatCardModule,MatButtonModule,MatChipsModule,MatRadioModule,MatDialogModule,MatCheckboxModule} from '@angular/material';
import {MatInputModule,MatTooltipModule,MatSnackBarModule,MatGridListModule} from '@angular/material';
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
import { EditlabelsComponent } from './components/editlabels/editlabels.component';
import { UploadimageComponent } from './components/uploadimage/uploadimage.component';
import { SearchPipe } from './search.pipe';
import { ListgridComponent } from './components/listgrid/listgrid.component';

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
    EditnotesComponent,
    EditlabelsComponent,
    UploadimageComponent,
    SearchPipe,
    ListgridComponent
  ],
  entryComponents:[EditnotesComponent,UploadimageComponent,EditlabelsComponent],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(routes,{
      onSameUrlNavigation: 'reload'
    }),FlexLayoutModule,MatTooltipModule,ReactiveFormsModule,HttpClientModule,MatGridListModule,MatCheckboxModule,
    BrowserAnimationsModule,MatListModule,MatRadioModule,FormsModule,MatInputModule,MatButtonModule,MatSnackBarModule,
    MatCardModule,MatIconModule,MatSidenavModule,MatToolbarModule,MatMenuModule,MatDialogModule,MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
