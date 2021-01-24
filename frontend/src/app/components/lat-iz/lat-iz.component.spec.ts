import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatIzComponent } from './lat-iz.component';

describe('LatIzComponent', () => {
  let component: LatIzComponent;
  let fixture: ComponentFixture<LatIzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatIzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatIzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
