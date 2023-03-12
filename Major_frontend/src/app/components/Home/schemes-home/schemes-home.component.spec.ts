import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesHomeComponent } from './schemes-home.component';

describe('SchemesHomeComponent', () => {
  let component: SchemesHomeComponent;
  let fixture: ComponentFixture<SchemesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
