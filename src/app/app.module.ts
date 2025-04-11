import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeekerDashboardComponent } from './seeker/seeker-dashboard/seeker-dashboard.component';
import { SeekerInterviewsComponent } from './seeker/seeker-interviews/seeker-interviews.component';
import { SeekerJobsComponent } from './seeker/seeker-jobs/seeker-jobs.component';
import { SeekerProfileComponent } from './seeker/seeker-profile/seeker-profile.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { CompanyPostJobComponent } from './company/company-post-job/company-post-job.component';
import { CompanyListingComponent } from './company/company-listing/company-listing.component';
import { CompanyApplicatnsComponent } from './company/company-applicatns/company-applicatns.component';
import { CompanySettingComponent } from './company/company-setting/company-setting.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TrendingJobsComponent } from './seeker/seeker-dashboard/trending-jobs/trending-jobs.component';
import { AppiledJobsComponent } from './seeker/seeker-dashboard/appiled-jobs/appiled-jobs.component';
import { RescheduleInterviewComponent } from './seeker/seeker-interviews/reschedule-interview/reschedule-interview.component';
import { ApplyComponent } from './seeker/seeker-jobs/apply/apply.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SeekerDashboardComponent,
    SeekerInterviewsComponent,
    SeekerJobsComponent,
    SeekerProfileComponent,
    CompanyDashboardComponent,
    CompanyPostJobComponent,
    CompanyListingComponent,
    CompanyApplicatnsComponent,
    CompanySettingComponent,
    PagenotfoundComponent,
    TrendingJobsComponent,
    AppiledJobsComponent,
    RescheduleInterviewComponent,
    ApplyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
