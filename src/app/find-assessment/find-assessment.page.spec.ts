import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindAssessmentPage } from './find-assessment.page';

describe('FindAssessmentPage', () => {
  let component: FindAssessmentPage;
  let fixture: ComponentFixture<FindAssessmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAssessmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindAssessmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
