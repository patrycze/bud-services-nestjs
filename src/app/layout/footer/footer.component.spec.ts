import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStyleHeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: NewStyleHeaderComponent;
  let fixture: ComponentFixture<NewStyleHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStyleHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStyleHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
