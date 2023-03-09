import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlurbComponent } from './home-blurb.component';

describe('HomeBlurbComponent', () => {
  let component: HomeBlurbComponent;
  let fixture: ComponentFixture<HomeBlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBlurbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
