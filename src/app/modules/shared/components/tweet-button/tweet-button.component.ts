import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet-button',
  templateUrl: './tweet-button.component.html',
  styleUrls: ['./tweet-button.component.scss']
})
export class TweetButtonComponent {

  @Input() public title:  string = '';

}
