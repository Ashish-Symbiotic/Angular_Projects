import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerregisComponent } from './ownerregis.component';

describe('OwnerregisComponent', () => {
  let component: OwnerregisComponent;
  let fixture: ComponentFixture<OwnerregisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerregisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerregisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
