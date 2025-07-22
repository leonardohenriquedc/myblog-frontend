import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlog } from './page-blog';

describe('PageBlog', () => {
  let component: PageBlog;
  let fixture: ComponentFixture<PageBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBlog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
