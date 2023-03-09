import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesContentDetailsComponent } from './schemes-content-details.component';

describe('SchemesContentDetailsComponent', () => {
  let component: SchemesContentDetailsComponent;
  let fixture: ComponentFixture<SchemesContentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemesContentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemesContentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
