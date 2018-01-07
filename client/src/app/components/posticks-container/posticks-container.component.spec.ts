import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosticksContainerComponent } from './posticks-container.component';

describe('PosticksContainerComponent', () => {
  let component: PosticksContainerComponent;
  let fixture: ComponentFixture<PosticksContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosticksContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosticksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
