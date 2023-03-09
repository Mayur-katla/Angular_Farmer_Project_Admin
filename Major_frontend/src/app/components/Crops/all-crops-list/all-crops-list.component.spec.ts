import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCropsListComponent } from './all-crops-list.component';

describe('AllCropsListComponent', () => {
  let component: AllCropsListComponent;
  let fixture: ComponentFixture<AllCropsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCropsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCropsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
