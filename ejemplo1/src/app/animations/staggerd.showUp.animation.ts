import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const showStaggered = trigger('showStaggered', [
    transition('* => *', [
        query(':enter',style({
            transform: 'translateX(-100px)',
            opacity: '0',
        }),{optional: true}),
        query(':enter',stagger('80ms', [
            animate('0.4s ease-in-out', keyframes([
                style({
                    transform: 'translateX(-100px)',
                    opacity: '0',
                    offset: 0,
                }),
                style({
                    transform: 'translateX(-50px)',
                    opacity: '0.5',
                    offset: 0.5,
                }),
                style({
                    transform: 'translateX(0px)',
                    opacity: '1',
                    offset: 1,
                }),
            ]))
        ]),{optional: true})
    ])
])