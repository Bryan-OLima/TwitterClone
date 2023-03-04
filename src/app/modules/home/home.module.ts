import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//pages 
import { TweetListComponent } from './components/tweet-list/tweet-list.component';
import { TweetAddNewComponent } from './components/tweet-add-new/tweet-add-new.component';
import { HeaderComponent } from './components/header/header.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../pages/home/home.component';



@NgModule({
  declarations: [
    TweetListComponent,
    TweetAddNewComponent,
    HeaderComponent,
    TweetComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
