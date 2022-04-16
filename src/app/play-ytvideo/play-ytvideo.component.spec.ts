import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayYtvideoComponent } from './play-ytvideo.component';

describe('PlayYtvideoComponent', () => {
  let component: PlayYtvideoComponent;
  let fixture: ComponentFixture<PlayYtvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayYtvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayYtvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
