import { Component } from '@angular/core';
 
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobs: any[] = [
    {
      type: 'Partime',
      title: 'Frontend Development',
      company: 'Facebook, Inc.',
      location: 'Western City, UK',
      link: '#',
      infoLink: 'job-single.html'
    },
    // Add more job objects as needed
    {
      type: 'part time',
      title: 'Back-end Development',
      company: 'IBM, Inc.',
      location: 'Western City, UK',
      link: '#',
      infoLink: 'job-single.html'
    },
    {
      type: 'Featured Job',
      title: 'Full-Stack Development',
      company: 'Marshall, Inc.',
      location: 'Western City, UK',
      link: '#',
      infoLink: 'job-single.html'
    },
    {
      type: 'Featured Job',
      title: 'Python Development',
      company: 'Introvert, Inc.',
      location: 'Western City, UK',
      link: '#',
      infoLink: 'job-single.html'
    },
    {
      type: 'part time',
      title: 'Back-end Development',
      company: 'IBM, Inc.',
      location: 'Western City, UK',
      link: '#',
      infoLink: 'job-single.html'
    },
    {
      type: 'part time',
      title: 'Back-end Development',
      company: 'IBM, Inc.',
      location: 'Western City, UK',
      link: '#',
      infoLink: 'job-single.html'
    },
    {
      type: 'Featured Job',
      title: 'Full-Stack Development',
      company: 'Marshall, Inc.',
      location: 'Western City, UK',
      link: '#',
      infoLink: 'job-single.html'
    },
  ];
  recruitments: any[] = [
    {
      companyName: 'Amazon Company',
      imageUrl: '/assets/images/enlarge_ii2.jpg',
      openPositions: 500
    },
    {
      companyName: 'Microsoft Company',
      imageUrl: '/assets/images/enlarge_ii2.jpg',
      openPositions: 700
    },
    {
      companyName: 'IBM Programming INC',
      imageUrl: '/assets/images/enlarge_ii2.jpg',
      openPositions: 700
    }
 ];
 
}