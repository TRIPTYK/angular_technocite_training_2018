import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  // votes: number;
  // title: string;
  // link: string;
  @Input() article: Article;
  constructor() {
    // this.votes = 30;
    // this.link = 'http://angular.io';
    // this.title = 'angular the best framework of the universe';
    // this.article = new Article('Angular Is the best', 'http://angular.io', 30);
  }
  voteUp() {
    this.article.voteUp();
    // this.article.votes++;
    return false;
  }
  voteDown() {
    this.article.voteDown();
    return false;
  }
  ngOnInit() {
  }

}
