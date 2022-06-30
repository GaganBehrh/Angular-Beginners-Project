import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challange3Component } from './challange3.component';

describe('Challange3Component', () => {
  let component: Challange3Component;
  let fixture: ComponentFixture<Challange3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challange3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challange3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
