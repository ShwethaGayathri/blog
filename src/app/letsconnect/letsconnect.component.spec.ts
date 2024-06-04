import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsconnectComponent } from './letsconnect.component';

describe('LetsconnectComponent', () => {
  let component: LetsconnectComponent;
  let fixture: ComponentFixture<LetsconnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetsconnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
