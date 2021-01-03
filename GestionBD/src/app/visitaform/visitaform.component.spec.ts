import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitaformComponent } from './visitaform.component';

describe('VisitaformComponent', () => {
  let component: VisitaformComponent;
  let fixture: ComponentFixture<VisitaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
