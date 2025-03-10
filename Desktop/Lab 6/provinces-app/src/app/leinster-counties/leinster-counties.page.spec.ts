import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeinsterCountiesPage } from './leinster-counties.page';

describe('LeinsterCountiesPage', () => {
  let component: LeinsterCountiesPage;
  let fixture: ComponentFixture<LeinsterCountiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeinsterCountiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
