import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsSidebarComponent } from './crops-sidebar.component';

describe('CropsSidebarComponent', () => {
  let component: CropsSidebarComponent;
  let fixture: ComponentFixture<CropsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropsSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CropsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
