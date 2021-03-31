import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHubComponent } from './manager-hub.component';

describe('ManagerHubComponent', () => {
  let component: ManagerHubComponent;
  let fixture: ComponentFixture<ManagerHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
