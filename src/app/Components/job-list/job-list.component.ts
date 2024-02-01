
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobDetailsDialogComponent } from '../job-details-dialog/job-details-dialog.component';

 
@Component({
  selector: 'app-job-list',
  template: `
  <h2 mat-dialog-title>{{ job.title }}</h2>
  <mat-dialog-content>
    <p>{{ job.description }}</p>
    <h3>Requirements:</h3>
    <ul>
      <li *ngFor="let requirement of job.requirements">{{ requirement }}</li>
    </ul>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button (click)="closeDialog()">Close</button>
  </mat-dialog-actions>
`,templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent {
  jobList = [
    {
      type: 'Full Time',
      badgeCount: 8,
      title: 'FrontEnd Developer',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
      category: 'Design',
      salary: '5.0 LPA',
      location: 'New York, USA',
      requirement: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam reiciendis mollitia deleniti voluptatum. Voluptatem, maiores delectus doloremque nemo provident natus!',
      applyLink: 'https://www.google.com/',
      moreInfoLink: 'https://www.google.com/',
    },
    {
      type: 'Part Time',
      badgeCount: 8,
      title: 'FrontEnd Developer',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
      category: 'Design',
      salary: '3.5 LPA',
      location: 'New York, USA',
      requirement: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam reiciendis mollitia deleniti voluptatum. Voluptatem, maiores delectus doloremque nemo provident natus!',
      applyLink: 'https://www.google.com/',
      moreInfoLink: 'https://www.google.com/',
    },
    {
      type: 'Part Time',
      
      badgeCount: 8,
      title: 'FrontEnd Developer',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
      category: 'Design',
      salary: '3.5 LPA',
      location: 'New York, USA',
      requirement: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam reiciendis mollitia deleniti voluptatum. Voluptatem, maiores delectus doloremque nemo provident natus!',
      applyLink: 'https://www.google.com/',
      moreInfoLink: 'https://www.google.com/',
    },
    {
      type: 'Full Time',
      badgeCount: 8,
      title: 'FrontEnd Developer',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
      category: 'Design',
      salary: '5.0 LPA',
      location: 'New York, USA',
      requirement: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam reiciendis mollitia deleniti voluptatum. Voluptatem, maiores delectus doloremque nemo provident natus!',
      applyLink: 'https://www.google.com/',
      moreInfoLink: 'https://www.google.com/',
    },
    {
      type: 'Full Time',
      badgeCount: 8,
      title: 'FrontEndo Developer',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
      category: 'Design',
      salary: '5.0 LPA',
      location: 'New York, USA',
      requirement: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam reiciendis mollitia deleniti voluptatum. Voluptatem, maiores delectus doloremque nemo provident natus!',
      applyLink: 'https://www.google.com/',
      moreInfoLink: 'https://www.google.com/',
    },
    {
      type: 'Part Time',
      
      badgeCount: 8,
      title: 'FrontEnd Developer',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
      category: 'Design',
      salary: '3.5 LPA',
      location: 'New York, USA',
      requirement: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam reiciendis mollitia deleniti voluptatum. Voluptatem, maiores delectus doloremque nemo provident natus!',
      applyLink: 'https://www.google.com/',
      moreInfoLink: 'https://www.google.com/',
    },
    {
      type: 'Full Time',
      badgeCount: 8,
      title: 'FrontEnd Developer',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
      category: 'Design',
      salary: '5.0 LPA',
      location: 'New York, USA',
      requirement: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam reiciendis mollitia deleniti voluptatum. Voluptatem, maiores delectus doloremque nemo provident natus!',
      applyLink: 'https://www.google.com/',
      moreInfoLink: 'https://www.google.com/',
    },
    {
      type: 'Part Time',
      
      badgeCount: 8,
      title: 'FrontEnd Developer',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
      category: 'Design',
      salary: '3.5 LPA',
      location: 'New York, USA',
      requirement: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam reiciendis mollitia deleniti voluptatum. Voluptatem, maiores delectus doloremque nemo provident natus!',
      applyLink: 'https://www.google.com/',
      moreInfoLink: 'https://www.google.com/',
    },
    
    // Add more job entries as needed
  ];
  pageSize = 4; // Display four items per page
  pageSizeOptions = [4]; // Only allow selecting four items per page

  jobsOnPage: any[] = []; // Declare jobsOnPage as an array property

  // Function to handle page change event
  onPageChange(event: any): void {
    // Calculate the start index for the current page
    const startIndex = event.pageIndex * this.pageSize;

    // Extract the jobs for the current page
    this.jobsOnPage = this.jobList.slice(startIndex, startIndex + this.pageSize);
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    // Initialize jobsOnPage with the first four items from jobList
    this.jobsOnPage = this.jobList.slice(0, this.pageSize);
  }

  openJobDetailsDialog(job: any): void {
    this.dialog.open(JobDetailsDialogComponent, {
      width: '600px',
      data: job
    });
  }
}