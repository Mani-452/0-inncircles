import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePostsComponent } from './see-posts.component';

describe('SeePostsComponent', () => {
  let component: SeePostsComponent;
  let fixture: ComponentFixture<SeePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeePostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
