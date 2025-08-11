import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageInsertNewBlog } from './page-insert-new-blog';

describe('PageInsertNewBlog', () => {
  let component: PageInsertNewBlog;
  let fixture: ComponentFixture<PageInsertNewBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageInsertNewBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageInsertNewBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
