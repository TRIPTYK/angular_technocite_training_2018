import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../shared/models/movie.model';
import { Resolve, ActivatedRoute } from '@angular/router';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: number;
  @Input() movie: Movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
    if (!this.movie && this.id) {
      console.error('no movie defined');
      // this.getMovieFromService(this.id);
    }
  }

  ngOnInit() {}
  getMovieFromService(id) {
    this.movieService.getMovieById(id).then(movies => {
      this.movie = movies[0] as Movie;
    });
  }
}
