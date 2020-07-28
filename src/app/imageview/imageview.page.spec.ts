import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImageviewPage } from './imageview.page';

describe('ImageviewPage', () => {
  let component: ImageviewPage;
  let fixture: ComponentFixture<ImageviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
