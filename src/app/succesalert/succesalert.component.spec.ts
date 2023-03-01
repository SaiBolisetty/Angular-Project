import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesalertComponent } from './succesalert.component';

describe('SuccesalertComponent', () => {
  let component: SuccesalertComponent;
  let fixture: ComponentFixture<SuccesalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesalertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccesalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
