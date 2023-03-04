import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TweetButtonComponent } from './components/tweet-button/tweet-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { TweetTrendingsComponent } from './components/tweet-trendings/tweet-trendings.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    TweetButtonComponent,
    NavBarComponent,
    InputSearchComponent,
    TweetTrendingsComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class SharedModule { }
