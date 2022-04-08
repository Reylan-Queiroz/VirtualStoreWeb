import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEmailComponent } from './tab-email.component';

describe('TabEmailComponent', () => {
  let component: TabEmailComponent;
  let fixture: ComponentFixture<TabEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
