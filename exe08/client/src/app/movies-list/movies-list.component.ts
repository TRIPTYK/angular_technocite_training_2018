import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/models/movie.model';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];
  visualMovies: any;
  constructor(private route: ActivatedRoute) {
    this.movies = [];
    this.visualMovies = [];
  }
  ngOnInit() {
    this.movies = this.route.snapshot.data['movies'];
    this.generateVisualMovies();
  }
  generateVisualMovies() {
    let tmpArray = [];
    this.movies.map((element, i) => {
      if (i % 4 === 0) {
        if (tmpArray.length > 0) {
          this.visualMovies.push(tmpArray);
        }
        tmpArray = [];
        tmpArray.push(element);
      } else {
        tmpArray.push(element);
        if (i === this.movies.length - 1) {
          this.visualMovies.push(tmpArray);
        }
      }
    });
  }
}
