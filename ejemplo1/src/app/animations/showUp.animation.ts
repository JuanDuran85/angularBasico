import { animate, state, style, transition, trigger } from '@angular/animations';

export const showUp = trigger('showUp', [
    state('0',style({
      backgroundColor: 'blue',
    })),
    state('1', style({
      backgroundColor: 'red'
    })),
    transition('0 => 1', animate('0.4s ease-out')),
    transition('1 => 0', animate('2.8s ease-out')),
])