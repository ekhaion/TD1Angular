import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapardComponent } from './capard.component';

describe('CapardComponent', () => {
  let component: CapardComponent;
  let fixture: ComponentFixture<CapardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
