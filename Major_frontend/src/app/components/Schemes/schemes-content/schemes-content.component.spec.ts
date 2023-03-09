import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemesContentComponent } from './schemes-content.component';

describe('SchemesContentComponent', () => {
  let component: SchemesContentComponent;
  let fixture: ComponentFixture<SchemesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemesContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
