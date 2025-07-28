import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesPageComponent } from './acces-page-component';

describe('AccesPageComponent', () => {
  let component: AccesPageComponent;
  let fixture: ComponentFixture<AccesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
