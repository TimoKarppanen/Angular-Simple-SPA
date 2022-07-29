import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TietoaMeistaComponent } from './tietoa-meista.component';

describe('TietoaMeistaComponent', () => {
  let component: TietoaMeistaComponent;
  let fixture: ComponentFixture<TietoaMeistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TietoaMeistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TietoaMeistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
