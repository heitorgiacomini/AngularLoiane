import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgtyleComponent } from './diretiva-ngtyle.component';

describe('DiretivaNgtyleComponent', () => {
  let component: DiretivaNgtyleComponent;
  let fixture: ComponentFixture<DiretivaNgtyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNgtyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaNgtyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
