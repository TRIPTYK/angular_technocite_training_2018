import { Injectable } from '@angular/core';

import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie.model';

@Injectable()
export class MoviesResolver implements Resolve<Movie[]> {
  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<any> {
    return this.movieService.getAll().then(results => {
      return results;
    });
  }
}
