import { animate, query, stagger, state, style, transition, trigger } from "@angular/animations";

export const showUp = trigger('showUpElement',[
    state('in',style({
       opacity: 1,
       transform: 'scale(1.5)'
    })),
    transition('*=>*',[
        query(':enter', [
            style({
                opacity: 0,
                transform: 'scale(0)'
            }),
            animate(350)
        ], {optional: true})
    ]),
]);

export const showUpStaggered = trigger('showUpCollection',[
    transition('*=>*',[
        query(':enter',[
            style({
                opacity: 0,
                transform: 'scale(0)'
            }),
            stagger(70,[
                animate(150,style({
                    opacity: 1,
                    transform: 'scale(1)'
                }))  
            ]),
        ], {optional: true})
    ])
])