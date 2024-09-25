import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesLearningComponent } from './pipes-learning.component';

describe('PipesLearningComponent', () => {
  let component: PipesLearningComponent;
  let fixture: ComponentFixture<PipesLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipesLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
