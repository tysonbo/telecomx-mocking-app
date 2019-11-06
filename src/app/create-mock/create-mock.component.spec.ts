import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMockComponent } from './create-mock.component';

describe('CreateMockComponent', () => {
  let component: CreateMockComponent;
  let fixture: ComponentFixture<CreateMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
