export class ArticlaModel {
  title!: string;
  abstract!: string;
  titlepath!: string;

  constructor(title: string, abstract: string, titlepath: string) {
    this.title = title;
    this.abstract = abstract;
    this.titlepath = titlepath;
  }
}
