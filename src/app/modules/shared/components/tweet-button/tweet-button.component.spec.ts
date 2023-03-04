import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetButtonComponent } from './tweet-button.component';

describe('TweetButtonComponent', () => {
  let component: TweetButtonComponent;
  let fixture: ComponentFixture<TweetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
