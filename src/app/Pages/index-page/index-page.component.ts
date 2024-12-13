import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { NgFor } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HeaderComponent } from '../../Components/layouts/header/header.component';
import { ExchangeComponent } from '../../Components/Exchange/exchange.component';
// import function to register Swiper custom elements

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [HeaderComponent, NgFor,LazyLoadImageModule,ExchangeComponent],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexPageComponent {
  banner="assets/index-page-banners/exch11Banner.jpeg"
  banners = [
    { url: "assets/index-page-banners/exch11Banner.jpeg" },
    { url: "assets/index-page-banners/liveDelersBanner.jpeg" },
    { url: "assets/index-page-banners/sportsBattingBanner.jpeg" },
    { url: "assets/index-page-banners/whatsappVerifiedBanner.jpeg" }
  ]

  // Trending now cards images
  trendingNowImages=[
    { url: "assets/game-card-images/image1.avif" },
    { url: "assets/game-card-images/image2.avif" },
    { url: "assets/game-card-images/image3.avif" },
    { url: "assets/game-card-images/image4.jpeg" },
    { url: "assets/game-card-images/image5.avif" },
    { url: "assets/game-card-images/image6.jpeg" },
    { url: "assets/game-card-images/image4.jpeg" },
    { url: "assets/game-card-images/image5.avif" },
    { url: "assets/game-card-images/image6.jpeg" }
  ]

  sportData=[
    {sportIcon:"🏏",sportName:"cricket"},
    {sportIcon:"🎾",sportName:"tennis"},
    {sportIcon:"⚽",sportName:"football"},
    {sportIcon:"🏇",sportName:"horse rasing"},
    {sportIcon:"🏀",sportName:"basket ball"},
    {sportIcon:"🏓",sportName:"tabale tennis"},
    {sportIcon:"🤼",sportName:"kabaddi"},
    {sportIcon:"🏉",sportName:"rugby"},
    {sportIcon:"🥊",sportName:"boxing"},
    {sportIcon:"🎮",sportName:"e-sports"},
   
  ]


  providerLogos=[
    { url: "assets/provider-logos/provider1.svg" },
    { url: "assets/provider-logos/provider2.svg" },
    { url: "assets/provider-logos/provider3.svg" },
    { url: "assets/provider-logos/provider4.svg" },
    { url: "assets/provider-logos/provider5.svg" },
    { url: "assets/provider-logos/provider6.svg" },
    { url: "assets/provider-logos/provider7.svg" },
    { url: "assets/provider-logos/provider8.svg" },
    { url: "assets/provider-logos/provider9.svg" }
  ]

  indianGames=[
    { url: "assets/indian-games/indianGame1.avif" },
    { url: "assets/indian-games/indianGame2.avif" },
    { url: "assets/indian-games/indianGame3.avif" },
    { url: "assets/indian-games/indianGame4.avif" },
    { url: "assets/indian-games/indianGame5.avif" },
    { url: "assets/indian-games/indianGame6.avif" },
    { url: "assets/indian-games/indianGame7.avif" },
    { url: "assets/indian-games/indianGame8.avif" },
    { url: "assets/indian-games/indianGame9.avif" }
  ]

  gameShows=[
    { url: "assets/game-shows/show1.jpeg" },
    { url: "assets/game-shows/show2.jpeg" },
    { url: "assets/game-shows/show3.jpeg" },
    { url: "assets/game-shows/show4.jpeg" },
    { url: "assets/game-shows/show5.jpeg" },
    { url: "assets/game-shows/show6.jpeg" },
    { url: "assets/game-shows/show7.jpeg" },
    { url: "assets/game-shows/show8.jpeg" },
    { url: "assets/game-shows/show9.jpeg" }
  ]

}