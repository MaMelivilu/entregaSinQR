import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ProfesorLoginPage } from './profesor-login.page';

describe('ProfesorLoginPage', () => {
  let component: ProfesorLoginPage;
  let fixture: ComponentFixture<ProfesorLoginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfesorLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
