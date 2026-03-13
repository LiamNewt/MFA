import { Component, inject } from '@angular/core';
import { MovieapiService } from '../movieapi-service';
import { input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  movieapiService=inject(MovieapiService);

  protected id= input.required<string>();

  ngOnInit() {
    let movieId= this.id();
    this.movieapiService.getMoviebyID(movieId);
  }


}
