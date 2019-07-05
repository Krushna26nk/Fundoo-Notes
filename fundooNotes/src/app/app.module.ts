import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';

import {MatIconModule,MatSidenavModule,MatToolbarModule,MatMenuModule,MatListModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { ArchievComponent } from './components/archiev/archiev.component';
import { TrashComponent } from './components/trash/trash.component';

const routes:Routes =[
  { path:'',component : NotesComponent},
  { path:'notes',component : NotesComponent},
  { path:'archives',component:ArchievComponent},
  { path:'trash',component:TrashComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotesComponent,
    ArchievComponent,
    TrashComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),
    BrowserAnimationsModule,MatListModule,FormsModule,MatInputModule,
    MatCardModule,MatIconModule,MatSidenavModule,MatToolbarModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
