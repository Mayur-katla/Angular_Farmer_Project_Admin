import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedsDetailsComponent } from './seeds-details.component';

describe('SeedsDetailsComponent', () => {
  let component: SeedsDetailsComponent;
  let fixture: ComponentFixture<SeedsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeedsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeedsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
