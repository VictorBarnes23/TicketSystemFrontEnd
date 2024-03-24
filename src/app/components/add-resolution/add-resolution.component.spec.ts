import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResolutionComponent } from './add-resolution.component';

describe('AddResolutionComponent', () => {
  let component: AddResolutionComponent;
  let fixture: ComponentFixture<AddResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddResolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
