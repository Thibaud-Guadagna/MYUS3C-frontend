import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doublebutton } from './doublebutton';

describe('Doublebutton', () => {
  let component: Doublebutton;
  let fixture: ComponentFixture<Doublebutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doublebutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doublebutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
