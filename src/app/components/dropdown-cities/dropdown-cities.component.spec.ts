import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCitiesComponent } from './dropdown-cities.component';

describe('DropdownCitiesComponent', () => {
  let component: DropdownCitiesComponent;
  let fixture: ComponentFixture<DropdownCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
