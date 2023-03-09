import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundContentComponent } from './background-content.component';

describe('BackgroundContentComponent', () => {
  let component: BackgroundContentComponent;
  let fixture: ComponentFixture<BackgroundContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
