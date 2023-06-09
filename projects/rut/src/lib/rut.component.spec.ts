import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutComponent } from './rut.component';

describe('RutComponent', () => {
  let component: RutComponent;
  let fixture: ComponentFixture<RutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
