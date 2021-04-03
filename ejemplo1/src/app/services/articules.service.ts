import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { interval } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class ArticlesService {
    public valor : any;
    
    public secondsCounter : any = interval(1000);
    public stopWatchValue : number;
    
    constructor(private http : HttpClient){}

    getAll(){
       return this.http.get('https://jsonplaceholder.typicode.com/users')
       .pipe(
            map((data : Object[]) => {
               return data
            })
        )
    }

    buildObservable() {
        return this.secondsCounter;
    }
}