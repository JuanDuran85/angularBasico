const { Observable, fromEvent } = rxjs;
const { scan, filter, throttleTime } = rxjs.operators;

let boton = document.getElementById('boton');
let cantidadClick = 0; //variable global mutable
let rate = 1000;
let timeClick = Date.now() - rate;

// forma tradicional
boton.addEventListener('click',()=>{
    if (Date.now() - timeClick >= rate) {
        timeClick = Date.now();
        cantidadClick++;
        if (cantidadClick % 2 === 0) {
            console.log("click numero: "+cantidadClick);
        }
    }
});

//implementado rxjs

/* fromEvent(boton,'click').subscribe({
    next: () => console.log(cantidadClick)
}); */

fromEvent(boton,'click').pipe(
    scan(num => num + 1, 0),
    filter(num => num % 2 === 0),
    throttleTime(1000)
).subscribe(console.log);