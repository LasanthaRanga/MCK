import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtdAllPage } from './atd-all.page';

describe('AtdAllPage', () => {
  let component: AtdAllPage;
  let fixture: ComponentFixture<AtdAllPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtdAllPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtdAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
