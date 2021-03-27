import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuela',
})

export class VuelaPipes implements PipeTransform {
    transform(valor : string) : string {
        return valor ? 'si vuela' : 'no Vuela';
    }
}