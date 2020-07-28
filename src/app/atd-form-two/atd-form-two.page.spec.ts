import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtdFormTwoPage } from './atd-form-two.page';

describe('AtdFormTwoPage', () => {
  let component: AtdFormTwoPage;
  let fixture: ComponentFixture<AtdFormTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtdFormTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtdFormTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
