import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesBackgroundComponent } from './schemes-background.component';

describe('SchemesBackgroundComponent', () => {
  let component: SchemesBackgroundComponent;
  let fixture: ComponentFixture<SchemesBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemesBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemesBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
