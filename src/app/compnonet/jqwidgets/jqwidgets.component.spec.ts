import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqwidgetsComponent } from './jqwidgets.component';

describe('JqwidgetsComponent', () => {
  let component: JqwidgetsComponent;
  let fixture: ComponentFixture<JqwidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqwidgetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JqwidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
