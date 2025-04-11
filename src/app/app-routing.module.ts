import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SeekerDashboardComponent } from './seeker/seeker-dashboard/seeker-dashboard.component';
import { SeekerInterviewsComponent } from './seeker/seeker-interviews/seeker-interviews.component';
import { SeekerJobsComponent } from './seeker/seeker-jobs/seeker-jobs.component';
import { SeekerProfileComponent } from './seeker/seeker-profile/seeker-profile.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { CompanyApplicatnsComponent } from './company/company-applicatns/company-applicatns.component';
import { CompanyListingComponent } from './company/company-listing/company-listing.component';
import { CompanyPostJobComponent } from './company/company-post-job/company-post-job.component';
import { CompanySettingComponent } from './company/company-setting/company-setting.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TrendingJobsComponent } from './seeker/seeker-dashboard/trending-jobs/trending-jobs.component';
import { AppiledJobsComponent } from './seeker/seeker-dashboard/appiled-jobs/appiled-jobs.component';
import { RescheduleInterviewComponent } from './seeker/seeker-interviews/reschedule-interview/reschedule-interview.component';

const routes: Routes = [
  // { path: 'navbar', component: NavbarComponent },
  // { path: '', component: NavbarComponent },
  { path: '', component: SeekerDashboardComponent },
  { path: 'seeker', component: SeekerDashboardComponent },
  { path: 'trendingJobs', component: TrendingJobsComponent },
  { path: 'appliedJobs', component: AppiledJobsComponent },
  { path: 'seekerInterview', component: SeekerInterviewsComponent },
  { path: 'rescheduleInterview', component: RescheduleInterviewComponent },
  { path: 'seekerJobs', component: SeekerJobsComponent },
  { path: 'seekerProfile', component: SeekerProfileComponent },
  { path: 'company', component: CompanyDashboardComponent },
  { path: 'companyApplicants', component: CompanyApplicatnsComponent },
  { path: 'companyListing', component: CompanyListingComponent },
  { path: 'companyPostJob', component: CompanyPostJobComponent },
  { path: 'companySetting', component: CompanySettingComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
