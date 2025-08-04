import { Component, EventEmitter, Output, output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Redirector } from '../../services/redirector/redirector';

@Component({
  selector: 'app-globalheader',
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './globalheader.html',
  styleUrl: './globalheader.css'
})
export class Globalheader {

  @ViewChild('drawer') openD!: MatSidenav;

  constructor(private redirector: Redirector) {
  }

  openDrawer(): void {
    this.openD.toggle();
  }

  callHome() {
    this.redirector.redirectToHome();
  }
}
