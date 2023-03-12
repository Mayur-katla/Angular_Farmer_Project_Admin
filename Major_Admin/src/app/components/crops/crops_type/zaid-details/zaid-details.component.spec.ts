import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaidDetailsComponent } from './zaid-details.component';

describe('ZaidDetailsComponent', () => {
  let component: ZaidDetailsComponent;
  let fixture: ComponentFixture<ZaidDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaidDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZaidDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
