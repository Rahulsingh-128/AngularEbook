import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesLearningComponent } from './directives-learning.component';

describe('DirectivesLearningComponent', () => {
  let component: DirectivesLearningComponent;
  let fixture: ComponentFixture<DirectivesLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirectivesLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
