import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Challange2Component } from './challange2.component';

describe('Challange2Component', () => {
  let component: Challange2Component;
  let fixture: ComponentFixture<Challange2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Challange2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Challange2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
