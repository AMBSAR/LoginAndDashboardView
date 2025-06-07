import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTitleCardComponent } from './tool-title-card.component';

describe('ToolTitleCardComponent', () => {
  let component: ToolTitleCardComponent;
  let fixture: ComponentFixture<ToolTitleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolTitleCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolTitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
