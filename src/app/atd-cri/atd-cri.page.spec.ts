import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtdCriPage } from './atd-cri.page';

describe('AtdCriPage', () => {
  let component: AtdCriPage;
  let fixture: ComponentFixture<AtdCriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtdCriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtdCriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
