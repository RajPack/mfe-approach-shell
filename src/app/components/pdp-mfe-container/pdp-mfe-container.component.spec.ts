import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalPdpMfeContainerComponent } from './pdp-mfe-container.component';

describe('PdpMfeContainerComponent', () => {
  let component: ExternalPdpMfeContainerComponent;
  let fixture: ComponentFixture<ExternalPdpMfeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalPdpMfeContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalPdpMfeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
