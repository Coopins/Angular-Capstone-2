import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JusticeLeagueComponent } from './justice-league.component';

describe('JusticeLeagueComponent', () => {
  let component: JusticeLeagueComponent;
  let fixture: ComponentFixture<JusticeLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JusticeLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JusticeLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
