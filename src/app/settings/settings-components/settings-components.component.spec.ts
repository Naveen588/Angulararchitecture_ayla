import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponentsComponent } from './settings-components.component';

describe('SettingsComponentsComponent', () => {
  let component: SettingsComponentsComponent;
  let fixture: ComponentFixture<SettingsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
