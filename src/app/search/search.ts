import { Component } from '@angular/core';
import { MovieapiService } from '../movieapi-service';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})

export class Search {

  protected moviename: string  = "";

  movies=inject(MovieapiService);

  searched = false;

  protected add() {
    this.searched=true;
    this.movies.getMovies(this.moviename);
    this.moviename='';
  }
  
}
