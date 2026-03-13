import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { take } from 'rxjs';
import { SearchResult } from './moviedetails.interface';
import { MovieResults } from './moviedetails.interface';


@Injectable({
  providedIn: 'root',
})

export class MovieapiService {

  private _http=inject(HttpClient);

  private _baseUrl = "http://www.omdbapi.com/";
  private _apiKey = "7377653b";

  private _lastSearch = "";

  public movies = signal<MovieResults[]>([]);
  public movie = signal<MovieResults | null>(null);
  public totalResults = signal(0);
  public maxPages = signal(1);
  public currentPage= signal(1);

  resultsPerPage=9;

  getMovies(title: string)
  {
    this._lastSearch = title;

    const url= this._baseUrl + "?s=" + title + "&page=" + this.currentPage() + "&apikey=" + this._apiKey;

    this._http.get<SearchResult>(url)
      .pipe(take(1))
      .subscribe(data => {
        if (data.Search){
        this.movies.set(data.Search);
       } else {
          this.movies.set([]);
        console.log(this.movies());
        }

        const total = Number(data.totalResults || 0);

        this.totalResults.set(total);

        this.maxPages.set(
          Math.ceil(total / this.resultsPerPage)
        );
      });
  }

  nextPage() {
    if (this.currentPage() < this.maxPages()){
      this.currentPage.update(page => page + 1);
      this.getMovies(this._lastSearch);
    }
  }

  previousPage(){
    if (this.currentPage() > 1){
      this.currentPage.update(page => page - 1);
      this.getMovies(this._lastSearch);
    }
  }

  getMoviebyID(movieId: string)
  {
    const url= this._baseUrl + "?i=" + movieId + "&apikey=" + this._apiKey;

    this._http.get<MovieResults>(url)
      .pipe(take(1))
      .subscribe(data => {
        this.movie.set(data);
        console.log(this.movie());
      });
  }


}
