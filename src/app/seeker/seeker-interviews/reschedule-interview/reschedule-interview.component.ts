import { Component } from '@angular/core';

@Component({
  selector: 'app-reschedule-interview',
  templateUrl: './reschedule-interview.component.html',
  styleUrls: ['./reschedule-interview.component.css'],
})
export class RescheduleInterviewComponent {
  onSubmit() {
    alert('✅ Reschedule request submitted successfully!');
    // You can send data to the backend here using a service
  }
}
