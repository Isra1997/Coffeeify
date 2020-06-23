import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeeBlockComponent } from './coffeee-block.component';

describe('CoffeeeBlockComponent', () => {
  let component: CoffeeeBlockComponent;
  let fixture: ComponentFixture<CoffeeeBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeeBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
