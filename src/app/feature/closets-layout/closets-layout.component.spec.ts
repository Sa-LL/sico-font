import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetsLayoutComponent } from './closets-layout.component';

describe('ClosetsLayoutComponent', () => {
  let component: ClosetsLayoutComponent;
  let fixture: ComponentFixture<ClosetsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosetsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosetsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
