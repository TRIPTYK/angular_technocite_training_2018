import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../shared/models/movie.model';
import { Resolve, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: number;
  unique: Boolean;
  @Input() movie: Movie;
  constructor(private route: ActivatedRoute) {
    this.unique = false;
  }

  ngOnInit() {
    if (!this.movie) {
      this.unique = true;
      this.movie = this.route.snapshot.data['movie'];
    }
  }
}
