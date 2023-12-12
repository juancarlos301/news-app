import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {
  NavbarComponent,
  FormComponent,
  NewsListComponent,
} from './components';
import { SpinnerComponent } from './shared';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FormComponent,
    NewsListComponent,
    SpinnerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private newsService: NewsService) {}
  title = 'news-app';
  listNews = [];
  loading = false;

  searchNews(params: { country: string; category: string }) {
    this.loading = true;
    this.newsService.getNews(params).subscribe(
      (data) => {
        this.listNews = data.articles;
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}
