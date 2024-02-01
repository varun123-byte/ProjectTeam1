// In your new component file (e.g., test.component.ts)
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-test',
  template: '<div [@fadeAnimation]></div>',
  animations: [
    trigger('fadeAnimation', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate(1000)]),
    ])
  ]
})
export class TestComponent { }
