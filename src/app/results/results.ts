import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MovieapiService } from '../movieapi-service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-results',
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  public movieService: MovieapiService;

  constructor() {
    this.movieService = inject(MovieapiService);
  }
}
