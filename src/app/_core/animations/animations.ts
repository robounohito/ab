import { trigger, animate, transition, style, query } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({ height: 0, opacity: 0 }),
    animate('200ms cubic-bezier(0.4,0.0,0.2,1)', style({ height: 'auto', opacity: 1 }))
  ]),
  transition(':leave', [
    animate('125ms cubic-bezier(0.4,0.0,0.2,1)', style({ height: 0, opacity: 0 }))
  ])
]);

export const columnFadeAnimation = trigger('columnFadeAnimation', [
  transition('* => *', [
    query(':leave', [
      style({
        opacity: 0,
        position: 'absolute',
        top: '-9999px'
      })
    ],
      { optional: true }
    ),
    query('.column',
      [
        style({
          opacity: 0
        }),
        animate('.5s',
          style({
            opacity: 1,
          })
        )
      ],
      { optional: true }
    ),
  ])
]);
