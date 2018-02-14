import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from '../shared/movie.service';
import { Movie } from '../shared/models/movie.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  movieForm: FormGroup;
  constructor(fb: FormBuilder, public movieService: MovieService) {
    this.movieForm = fb.group({
      title: [''],
      id: [''],
      poster_path: [''],
      overview: [''],
      release_date: ['']
    });
  }

  ngOnInit() {}
  onSubmit(movie) {
    this.movieService.postMovie(movie as Movie);
  }
}
