import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { Home } from '../../home/home';
import { ArticlaModel } from '../../models/articleModel';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [],
  templateUrl: './teste.html',
  styleUrl: './teste.css'
})
export class Teste implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('abstract') abstract!: ElementRef;

  constructor(private home: Home, private renderer: Renderer2) {

    console.log("Foi iniciado");
  }

  ngAfterViewInit(): void {

    const titleElement = this.title.nativeElement;
    const abstractElement = this.abstract.nativeElement;

    const contentTitleElement = titleElement.textContent?.trim() ?? '';
    const contentAbstractElement = abstractElement.textContent?.trim() ?? '';

    const article: ArticlaModel = new ArticlaModel(contentTitleElement, contentAbstractElement, '/teste');
    console.log("ngAfterViewInit foi chamado");
    this.addArticle(article);
  }

  addArticle(article: ArticlaModel) {
    console.log("add article foi chamado");
    this.home.addArticle(article);
  }
}
