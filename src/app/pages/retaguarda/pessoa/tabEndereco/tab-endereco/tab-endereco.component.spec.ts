import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEnderecoComponent } from './tab-endereco.component';

describe('TabEnderecoComponent', () => {
  let component: TabEnderecoComponent;
  let fixture: ComponentFixture<TabEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabEnderecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
