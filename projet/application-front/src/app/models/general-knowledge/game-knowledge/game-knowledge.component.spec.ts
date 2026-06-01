import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameKnowledgeComponent } from './game-knowledge.component';

describe('GameKnowledgeComponent', () => {
  let component: GameKnowledgeComponent;
  let fixture: ComponentFixture<GameKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
