import { trigger, animate, transition, style } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({ height: 0, opacity: 0 }),
    animate('250ms cubic-bezier(0.4,0.0,0.2,1)', style({ height: 'auto', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('125ms cubic-bezier(0.4,0.0,0.2,1)', style({ height: 0, opacity: 0 }))
  ])
]);
