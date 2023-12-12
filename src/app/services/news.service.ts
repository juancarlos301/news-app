import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}
  apikey = '3deec1c48c714feeb6093ec01faaa5a7';

  getNews(params: { category: string; country: string }): Observable<any> {
    const URL = `https://newsapi.org/v2/top-headlines?country=${params.country}&category=${params.category}&apiKey=${this.apikey}`;
    return this.http.get(URL);
  }
}
