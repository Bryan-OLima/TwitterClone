import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetTrendingsComponent } from './tweet-trendings.component';

describe('TweetTrendingsComponent', () => {
  let component: TweetTrendingsComponent;
  let fixture: ComponentFixture<TweetTrendingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetTrendingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetTrendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
