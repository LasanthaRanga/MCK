import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtdPrintPage } from './atd-print.page';

describe('AtdPrintPage', () => {
  let component: AtdPrintPage;
  let fixture: ComponentFixture<AtdPrintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtdPrintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtdPrintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
