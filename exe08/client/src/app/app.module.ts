import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieService } from './shared/movie.service';
import { MovieComponent } from './movie/movie.component';

const routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MoviesListComponent },
  { path: 'movie/:id', component: MovieComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MoviesListComponent,
    MovieComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
