import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule ,Routes} from '@angular/router';
import { Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { DataService } from './services/data.service';



import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';


import { OwnerregisComponent } from './ownerregis/ownerregis.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostComponent } from './post/post.component';
import { ListusersComponent } from './listusers/listusers.component';
import { RentComponent } from './rent/rent.component';

import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AdminmainComponent } from './adminmain/adminmain.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TypeFilterPipe } from './type-filter.pipe';
import { AboutComponent } from './about/about.component';
import { PropertydeatilsComponent } from './propertydeatils/propertydeatils.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
 

const appRoutes: Routes =[
{ path: '', component: HomepageComponent },
  { path: 'own',      component: OwnerregisComponent },
  {path : 'Login', component:LoginformComponent},
  { path: 'Post',      component: PostViewComponent },
  { path: 'Post1',      component: PostComponent },
  { path: 'adminLogin',      component: AdminloginComponent },
  { path: 'adminmain',      component: AdminmainComponent },
  { path: 'Rent',      component: RentComponent },
  { path: 'listusers',      component: ListusersComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'prop/:id',      component: PropertydeatilsComponent },

  { path: 'userdetails',      component: UserdetailsComponent },
   { path: '**',      component: PagenotfoundComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    
	OwnerregisComponent,
	
	LoginformComponent,
	
	HomepageComponent,
	
	PostViewComponent,
	
	PostComponent,
	
	ListusersComponent,
	
	RentComponent,
	
	
	
	UserdetailsComponent,
	
	AdminmainComponent,
	
	AdminloginComponent,
	
	TypeFilterPipe,
	
	AboutComponent,
	
	PropertydeatilsComponent,
	
	EnquiryComponent,
	
	ProfileComponent,
	
	PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
  ReactiveFormsModule,
	FormsModule,
	 RouterModule.forRoot(
      appRoutes// <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
