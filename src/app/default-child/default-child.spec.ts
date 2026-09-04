import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultChild } from './default-child';

describe('DefaultChild', () => {
  let component: DefaultChild;
  let fixture: ComponentFixture<DefaultChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultChild],
    }).compileComponents();

    fixture = TestBed.createComponent(DefaultChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
