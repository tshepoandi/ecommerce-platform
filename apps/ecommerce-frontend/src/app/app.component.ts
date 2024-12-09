import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FaConfig,
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fontAwesomeIcons } from './shared/font-awsome-icons';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';

@Component({
  imports: [RouterModule, FontAwesomeModule, FooterComponent, NavbarComponent],
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private faIconLibrary = inject(FaIconLibrary);
  private FaConfig = inject(FaConfig);

  ngOnInit(): void {
    this.initFontAwesome();
  }

  private initFontAwesome() {
    this.FaConfig.defaultPrefix = 'far';
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
