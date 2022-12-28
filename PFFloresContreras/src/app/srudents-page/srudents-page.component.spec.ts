import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrudentsPageComponent } from './srudents-page.component';

describe('SrudentsPageComponent', () => {
  let component: SrudentsPageComponent;
  let fixture: ComponentFixture<SrudentsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrudentsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrudentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
