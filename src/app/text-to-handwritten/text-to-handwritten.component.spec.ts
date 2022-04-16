import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToHandwrittenComponent } from './text-to-handwritten.component';

describe('TextToHandwrittenComponent', () => {
  let component: TextToHandwrittenComponent;
  let fixture: ComponentFixture<TextToHandwrittenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextToHandwrittenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToHandwrittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
