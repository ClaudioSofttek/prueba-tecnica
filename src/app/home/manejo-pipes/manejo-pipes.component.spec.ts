import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManejoPipesComponent } from './manejo-pipes.component';

describe('ManejoPipesComponent', () => {
  let component: ManejoPipesComponent;
  let fixture: ComponentFixture<ManejoPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManejoPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManejoPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
