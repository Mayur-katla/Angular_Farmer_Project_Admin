import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabiDetailsComponent } from './rabi-details.component';

describe('RabiDetailsComponent', () => {
  let component: RabiDetailsComponent;
  let fixture: ComponentFixture<RabiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RabiDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RabiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
