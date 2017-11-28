import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DalamSiteComponent } from './dalam-site.component';

describe('DalamSiteComponent', () => {
  let component: DalamSiteComponent;
  let fixture: ComponentFixture<DalamSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DalamSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DalamSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
