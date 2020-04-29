import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeProductComponent } from './list-type-product.component';

describe('ListTypeProductComponent', () => {
  let component: ListTypeProductComponent;
  let fixture: ComponentFixture<ListTypeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
