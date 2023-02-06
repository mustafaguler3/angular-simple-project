import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesHomeComponent } from './tables-home.component';

describe('TablesHomeComponent', () => {
  let component: TablesHomeComponent;
  let fixture: ComponentFixture<TablesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
