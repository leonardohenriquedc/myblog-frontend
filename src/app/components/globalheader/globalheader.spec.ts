import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Globalheader } from './globalheader';

describe('Globalheader', () => {
  let component: Globalheader;
  let fixture: ComponentFixture<Globalheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Globalheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Globalheader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
