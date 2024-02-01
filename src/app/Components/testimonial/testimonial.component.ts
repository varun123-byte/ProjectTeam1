import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css'],
})
export class TestimonialComponent {
  testimonials: Testimonial[] = [
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
      name: 'Eleanor Crisp',
      role: 'UX Design',
      comment: 'Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!',
    },
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg',
      name: 'Gordon Norman',
      role: 'Accountant',
      comment: 'Wormwood : Calvin, how about you? Calvin : Hard to say ma\'am. I think my cerebellum has just fused.Hard to say ma\'am. ',
    },
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg',
      name: 'Sue Shei',
      role: 'Public Relations',
      comment: 'The strength to change what I can, the inability to accept what I can\'t and the incapacity to tell the difference.',
    },
    // Add other testimonials here
  ];
}

export interface Testimonial {
  name: string;
  role: string;
  comment: string;
  imageUrl: string;
}
