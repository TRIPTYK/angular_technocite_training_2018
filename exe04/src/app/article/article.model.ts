export class Article {
  private title: string;
  private link: string;
  private votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  voteUp() {
    this.votes++;
  }
  voteDown() {
    this.votes--;
  }
}
