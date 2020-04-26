import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertydeatilsComponent } from './propertydeatils.component';

describe('PropertydeatilsComponent', () => {
  let component: PropertydeatilsComponent;
  let fixture: ComponentFixture<PropertydeatilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertydeatilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertydeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
