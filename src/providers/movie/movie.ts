import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MovieProvider {

  private baseAPIURL: string = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
  }

  getLatestMovies() {
    return this.http.get(this.baseAPIURL + `/movie/popular?api_key=${this.getApiKey()}`);
  }

  getApiKey(): string {
    return "51e4e9d52532d389174b5252cd99d33d";
  }
}
