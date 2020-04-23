import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CasesComponent } from './cases/cases.component';
import { CaseDetailsComponent } from './case-details/case-details.component';
import { AddCasesComponent } from './add-cases/add-cases.component';
import { EditCasesComponent } from './edit-cases/edit-cases.component';
import { CasesStatComponent } from './cases-stat/cases-stat.component';
import { RedColorDirective } from './red-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    CaseDetailsComponent,
    AddCasesComponent,
    EditCasesComponent,
    CasesStatComponent,
    RedColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
