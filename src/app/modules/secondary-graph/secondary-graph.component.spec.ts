import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryGraphComponent } from './secondary-graph.component';

describe('SecondaryGraphComponent', () => {
  let component: SecondaryGraphComponent;
  let fixture: ComponentFixture<SecondaryGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondaryGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
