import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateUser } from './page-create-user';

describe('PageCreateUser', () => {
  let component: PageCreateUser;
  let fixture: ComponentFixture<PageCreateUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCreateUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCreateUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
