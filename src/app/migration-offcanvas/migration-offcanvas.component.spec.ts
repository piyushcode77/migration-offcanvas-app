import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationOffcanvasComponent } from './migration-offcanvas.component';

describe('MigrationOffcanvasComponent', () => {
  let component: MigrationOffcanvasComponent;
  let fixture: ComponentFixture<MigrationOffcanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigrationOffcanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigrationOffcanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
