import { Component } from '@angular/core';
import { Globalheader } from '../globalheader/globalheader';
import { RouterModule } from '@angular/router';
import { Teste } from '../articles/teste/teste';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, Globalheader, Teste],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
