import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsContentComponent } from './crops-content.component';

describe('CropsContentComponent', () => {
  let component: CropsContentComponent;
  let fixture: ComponentFixture<CropsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
