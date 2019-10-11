import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';


import {MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { AnimationComponent } from './components/animation/animation.component';
import { SecondanimationComponent } from './components/secondanimation/secondanimation.component';

const routes: Routes = [
  { path: '', component: FirstComponent},
  {path: 'first', component: FirstComponent},
  { path: 'second', component: SecondComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    AnimationComponent,
    SecondanimationComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
