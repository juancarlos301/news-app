import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css',
})
export class NewsListComponent {
  @Input() listNews: any[] = [];

  defaultUrlImage =
    'https://image.cnbcfm.com/api/v1/image/107345852-17023093152023-12-11t153959z_1326811554_rc22v4axpmqb_rtrmadp_0_usa-stocks.jpeg?v=1702309411&w=1920&h=1080';

  constructor() {}
}
