import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaformComponent } from './areaform.component';

describe('AreaformComponent', () => {
  let component: AreaformComponent;
  let fixture: ComponentFixture<AreaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
