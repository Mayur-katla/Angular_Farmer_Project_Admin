import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsFormComponent } from './crops-form.component';

describe('CropsFormComponent', () => {
  let component: CropsFormComponent;
  let fixture: ComponentFixture<CropsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
