import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YhteystiedotComponent } from './yhteystiedot.component';

describe('YhteystiedotComponent', () => {
  let component: YhteystiedotComponent;
  let fixture: ComponentFixture<YhteystiedotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YhteystiedotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YhteystiedotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
