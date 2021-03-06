import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPageComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: BasicPageComponent;
  let fixture: ComponentFixture<BasicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
