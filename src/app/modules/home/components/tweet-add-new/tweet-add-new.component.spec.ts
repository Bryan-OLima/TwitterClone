import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetAddNewComponent } from './tweet-add-new.component';

describe('TweetAddNewComponent', () => {
  let component: TweetAddNewComponent;
  let fixture: ComponentFixture<TweetAddNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetAddNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
