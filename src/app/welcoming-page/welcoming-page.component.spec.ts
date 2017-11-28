import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomingPageComponent } from './welcoming-page.component';

describe('WelcomingPageComponent', () => {
  let component: WelcomingPageComponent;
  let fixture: ComponentFixture<WelcomingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
