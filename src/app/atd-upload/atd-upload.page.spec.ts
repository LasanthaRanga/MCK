import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtdUploadPage } from './atd-upload.page';

describe('AtdUploadPage', () => {
  let component: AtdUploadPage;
  let fixture: ComponentFixture<AtdUploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtdUploadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtdUploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
