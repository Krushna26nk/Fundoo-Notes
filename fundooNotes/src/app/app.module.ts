import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RichTextEditorAllModule} from '@syncfusion/ej2-angular-richtexteditor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import {FlexLayoutModule} from '@angular/flex-layout';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';

import {MatIconModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatListModule, MatDatepickerModule} from '@angular/material';
import {MatCardModule, MatButtonModule, MatChipsModule, MatRadioModule, MatDialogModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule, MatTooltipModule, MatSnackBarModule, MatGridListModule, MatNativeDateModule, MatOptionModule} from '@angular/material';
import {MatSelectModule, MatAutocompleteModule, MatBadgeModule, MatStepperModule, MatProgressBarModule, MatTabsModule} from '@angular/material';
import {MatTableModule} from '@angular/material';

import {ImageCropperModule} from 'ngx-image-cropper';

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
import { GetnotesComponent } from './components/getnotes/getnotes.component';
import { IconsComponent } from './components/icons/icons.component';
import { EditorComponent } from './components/editor/editor.component';
import { QuestionanswerComponent } from './components/questionanswer/questionanswer.component';
import { IconCollaboratorComponent } from './components/icon-collaborator/icon-collaborator.component';
import { IconReminderComponent } from './components/icon-reminder/icon-reminder.component';
import { ImageComponent } from './components/image/image.component';
import { ColorComponent } from './components/color/color.component';
import { IconColorComponent } from './components/icon-color/icon-color.component';
import { IconImageComponent } from './components/icon-image/icon-image.component';
import { AskquestionComponent } from './components/askquestion/askquestion.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { CartviewloginComponent } from './components/cartviewlogin/cartviewlogin.component';
import { DialogcomponentComponent } from './components/dialogcomponent/dialogcomponent.component';
import { RegisterWithServiceComponent } from './components/register-with-service/register-with-service.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthrouteGuard } from './authroute.guard';
import { AuthService } from './services/auth.service';
import { SelectSecondComponent } from './components/select-second/select-second.component';

const routes: Routes = [
  { path: '', component: CartviewloginComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'registerWithService', component: RegisterWithServiceComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forget', component: ForgetpasswordComponent},
  { path: 'reset', component: ResetpasswordComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
    { path: '', component : NotesComponent, children: [
      {path: '', component: GetnotesComponent}
    ]},
    { path: 'notes',
      component : NotesComponent,
      canActivate: [AuthrouteGuard]},

    { path: 'questionanswer',
      component: QuestionanswerComponent,
      canActivate: [AuthrouteGuard]},

    { path: 'archives',
      component: ArchievComponent,
      canActivate: [AuthrouteGuard]},


    { path: 'trash',
      component: TrashComponent,
      canActivate: [AuthrouteGuard]},

    { path: 'label',
      component: LabelsComponent,
      canActivate: [AuthrouteGuard]},

    { path: 'remainder',
      component: RemainderComponent,
      canActivate: [AuthrouteGuard]},

    { path: 'editor' ,
      component: EditorComponent,
      canActivate: [AuthrouteGuard]},

    { path: 'cart' ,
      component: ShoppingCartComponent,
      canActivate: [AuthrouteGuard]}
  ],
  canActivate: [AuthrouteGuard]
},

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
    ListgridComponent,
    GetnotesComponent,
    IconsComponent,
    EditorComponent,
    QuestionanswerComponent,
    IconCollaboratorComponent,
    IconReminderComponent,
    ImageComponent,
    ColorComponent,
    IconColorComponent,
    IconImageComponent,
    AskquestionComponent,
    ShoppingCartComponent,
    ProgressbarComponent,
    CartviewloginComponent,
    DialogcomponentComponent,
    RegisterWithServiceComponent,
    CartComponent,
    SelectSecondComponent,
  ],
  entryComponents: [EditnotesComponent, UploadimageComponent, EditlabelsComponent,
    QuestionanswerComponent, DialogcomponentComponent, SelectSecondComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    }), FlexLayoutModule, MatSelectModule, MatTooltipModule, ReactiveFormsModule, HttpClientModule, MatGridListModule,
    MatCheckboxModule, MatProgressBarModule, BrowserAnimationsModule, MatListModule, MatRadioModule, FormsModule, MatInputModule,
    MatButtonModule, MatSnackBarModule, MatStepperModule, MatTabsModule, MatTableModule, MatCardModule, MatIconModule,
    MatSidenavModule, MatAutocompleteModule, MatToolbarModule, MatMenuModule, MatDialogModule, MatOptionModule, MatNativeDateModule,
    MatDatepickerModule, MatChipsModule,
    RichTextEditorAllModule, MatBadgeModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(), ImageCropperModule
  ],
  providers: [AuthrouteGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
