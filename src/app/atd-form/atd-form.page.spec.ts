import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtdFormPage } from './atd-form.page';

describe('AtdFormPage', () => {
  let component: AtdFormPage;
  let fixture: ComponentFixture<AtdFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtdFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtdFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
