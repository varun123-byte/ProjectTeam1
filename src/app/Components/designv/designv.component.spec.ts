import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignvComponent } from './designv.component';

describe('DesignvComponent', () => {
  let component: DesignvComponent;
  let fixture: ComponentFixture<DesignvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignvComponent]
    });
    fixture = TestBed.createComponent(DesignvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
