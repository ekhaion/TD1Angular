import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenudosComponent } from './bienvenudos.component';

describe('BienvenudosComponent', () => {
  let component: BienvenudosComponent;
  let fixture: ComponentFixture<BienvenudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienvenudosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
