import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeAnimJumptronComponent } from './coffee-anim-jumptron.component';

describe('CoffeeAnimJumptronComponent', () => {
  let component: CoffeeAnimJumptronComponent;
  let fixture: ComponentFixture<CoffeeAnimJumptronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeAnimJumptronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeAnimJumptronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
