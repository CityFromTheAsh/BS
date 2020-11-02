import { trigger, state, style, transition, animate, AnimationTriggerMetadata } from '@angular/animations';


export function fallIn(): AnimationTriggerMetadata {
  return trigger('fallIn', [
    transition(':enter', [
      style({opacity: '0', transform: 'translateY(-100px)'}),
      animate('.6s ease-in-out', style({opacity: '1', transform: 'translateY(0)'}))
    ]),
    transition(':leave', [
      style({opacity: '1', transform: 'translateY(0)'}),
      animate('.3s ease-in-out', style({opacity: '0', transform: 'translateY(200px)'}))
    ])
  ]);
}
