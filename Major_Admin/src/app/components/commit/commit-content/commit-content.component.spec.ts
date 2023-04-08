import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitContentComponent } from './commit-content.component';

describe('CommitContentComponent', () => {
  let component: CommitContentComponent;
  let fixture: ComponentFixture<CommitContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
