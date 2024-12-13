import { Component, OnInit } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgIf,NgFor } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LazyLoadImageModule,NgIf,NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent  {
  // header icons -----------
  headerIcons= {
    HeaderLogo: "assets/header-icons/Side_Logo.png"
  }
  // header tabs-----------
  headerTabs=["aviator","aura","live","casino","sports","superbook","virtual sports","poker","slots games"]
}
