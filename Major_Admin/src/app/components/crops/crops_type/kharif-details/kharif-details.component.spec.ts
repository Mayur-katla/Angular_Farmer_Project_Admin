import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KharifDetailsComponent } from './kharif-details.component';

describe('KharifDetailsComponent', () => {
  let component: KharifDetailsComponent;
  let fixture: ComponentFixture<KharifDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KharifDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KharifDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
