import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListjoueursComponent } from './listjoueurs.component';

describe('ListjoueursComponent', () => {
  let component: ListjoueursComponent;
  let fixture: ComponentFixture<ListjoueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListjoueursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListjoueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
