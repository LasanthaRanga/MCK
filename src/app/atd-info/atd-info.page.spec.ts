import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtdInfoPage } from './atd-info.page';

describe('AtdInfoPage', () => {
  let component: AtdInfoPage;
  let fixture: ComponentFixture<AtdInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtdInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtdInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
