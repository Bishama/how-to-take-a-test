import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockAssistanceSelectionComponent } from 'src/app/shared/_spec-tools/components/mock-assistance-selection-component.spec';
import { MockGradeLevelSelectionComponent } from 'src/app/shared/_spec-tools/components/mock-grade-level-selection-component.spec';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        HomeComponent,

        MockAssistanceSelectionComponent,
        MockGradeLevelSelectionComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
