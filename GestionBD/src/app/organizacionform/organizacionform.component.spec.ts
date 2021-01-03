import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionformComponent } from './organizacionform.component';

describe('OrganizacionformComponent', () => {
  let component: OrganizacionformComponent;
  let fixture: ComponentFixture<OrganizacionformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizacionformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizacionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
