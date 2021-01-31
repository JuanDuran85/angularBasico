import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'secondsToTimeFormat'
})

export class SecondsToTimeFormat implements PipeTransform {
    transform(seconds : number) : string {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor(seconds % 3600 / 60);

        return `${hours}hrs ${minutes}mins`;
    }
}