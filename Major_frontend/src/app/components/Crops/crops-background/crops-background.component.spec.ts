import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsBackgroundComponent } from './crops-background.component';

describe('CropsBackgroundComponent', () => {
  let component: CropsBackgroundComponent;
  let fixture: ComponentFixture<CropsBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropsBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropsBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
