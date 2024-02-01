import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
        // Animation for the card
        trigger('cardAnimation', [
          transition(':enter', [
            animate('1s', keyframes([
              style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
              style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
            ]))
          ])
        ])
  ],
})
export class LayoutComponent {
  cardAnimationState = 'final';
 
  // Array of cards with unique IDs
  cards = [
    { id: 1, title: 'Website and Training', icon: 'fa-graduation-cap', positions: '143 Open Positions' },
    { id: 2, title: 'Education and Training', icon: 'fa-graduation-cap', positions: '143 Open Positions' },
    { id: 3, title: 'Graphic and UI/UX Design', icon: 'fa-table', positions: '143 Open Positions' },
    { id: 4, title: 'Account and Finance', icon: 'fa-calculator', positions: '143 Open Positions' },
    { id: 5, title: 'Restaurant and Food', icon: 'fa-android', positions: '143 Open Positions' },
    { id: 6, title: 'Website and Software', icon: 'fa-stethoscope', positions: '143 Open Positions' },
    // Add more cards as needed
  ];
 
  // Function to trigger the animation
  animateCard(index: number) {
    // Logic to trigger the animation for the card with the given index
    console.log(`Animating card with ID ${this.cards[index].id}`);
  }
}


 
