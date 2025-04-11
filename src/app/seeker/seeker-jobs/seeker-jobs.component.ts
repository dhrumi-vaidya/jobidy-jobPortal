import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seeker-jobs',
  templateUrl: './seeker-jobs.component.html',
  styleUrls: ['./seeker-jobs.component.css'],
})
export class SeekerJobsComponent {
  selectedJobTitle = '';
  selectedCompany = '';
  selectedPostedDate = '';

  openJob(title: string, company: string, date: string) {
    this.selectedJobTitle = title;
    this.selectedCompany = company;
    this.selectedPostedDate = date;
  }
}
