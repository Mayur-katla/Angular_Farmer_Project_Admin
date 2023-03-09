import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCropsComponent } from './single-crops.component';

describe('SingleCropsComponent', () => {
  let component: SingleCropsComponent;
  let fixture: ComponentFixture<SingleCropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
