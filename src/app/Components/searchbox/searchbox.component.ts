import { Component } from '@angular/core';
 
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent {
 
  jobKeywords: string = 'Angular, TypeScript, Web Development'; // Initial keywords
  selectedLocation: string = 'New York'; // Initial location
  selectedCategory: string = 'Programming'; // Initial category
 
  // Additional options
  locationOptions: string[] = ['New York', 'San Francisco', 'London', 'Berlin', 'Tokyo'];
  categoryOptions: string[] = ['Programming', 'Design', 'Marketing', 'Finance', 'Healthcare'];
 
  onSubmit() {
    // Add your form submission logic here
    console.log('Form submitted!');
    console.log('Job Keywords:', this.jobKeywords);
    console.log('Selected Location:', this.selectedLocation);
    console.log('Selected Category:', this.selectedCategory);
  }
}
 