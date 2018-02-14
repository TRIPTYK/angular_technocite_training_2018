import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Movie } from './models/movie.model';
import { RouterStateSnapshot, Router } from '@angular/router';
const BASE_URL = 'http://localhost:9000/api/movies';
const HEADER = new HttpHeaders({ 'Content-type': 'application/json' });
@Injectable()
export class MovieService {
  constructor(public http: HttpClient, public router: Router) {}
  getAll() {
    return this.http.get(BASE_URL).toPromise();
  }
  getMoviesCount() {
    return this.http.get(`${BASE_URL}/count`).toPromise();
  }
  getMovieById(id: number) {
    return this.http.get(`${BASE_URL}/${id}`).toPromise();
  }
  postMovie(movie: Movie) {
    this.http
      .post(`${BASE_URL}`, JSON.stringify(movie), {
        headers: HEADER
      })
      .toPromise()
      .then(r => this.router.navigate(['/home']))
      .catch(err => console.log(err.message));
  }
}
