import { Component } from '@angular/core';
import { Search } from '../search/search';
import { Results } from '../results/results';

@Component({
  selector: 'app-home',
  imports: [Results, Search],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


}
