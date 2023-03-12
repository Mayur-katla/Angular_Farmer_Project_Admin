import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesticideDetailsComponent } from './pesticide-details.component';

describe('PesticideDetailsComponent', () => {
  let component: PesticideDetailsComponent;
  let fixture: ComponentFixture<PesticideDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesticideDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesticideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
