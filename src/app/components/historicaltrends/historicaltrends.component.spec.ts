import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricaltrendsComponent } from './historicaltrends.component';

describe('HistoricaltrendsComponent', () => {
  let component: HistoricaltrendsComponent;
  let fixture: ComponentFixture<HistoricaltrendsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricaltrendsComponent]
    });
    fixture = TestBed.createComponent(HistoricaltrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
