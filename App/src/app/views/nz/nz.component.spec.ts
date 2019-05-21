import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzComponent } from './nz.component';

describe('NzComponent', () => {
  let component: NzComponent;
  let fixture: ComponentFixture<NzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
