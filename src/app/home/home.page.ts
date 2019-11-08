import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map }  from  'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cards: any;

  constructor(private httpClient: HttpClient) {
    this.cards = this.httpClient.get('https://api.myjson.com/bins/1cbpkk').pipe(map(res => res['results']));
  }
}
