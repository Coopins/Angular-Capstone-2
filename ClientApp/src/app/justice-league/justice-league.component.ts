import { Component, OnInit } from '@angular/core';
import { JusticeLeagueMember } from '../interfaces/justice-league-member';

@Component({
  selector: 'app-justice-league',
  templateUrl: './justice-league.component.html',
  styleUrls: ['./justice-league.component.css']
})
export class JusticeLeagueComponent implements OnInit {

  member: JusticeLeagueMember =
  {
    Id: 0,
    name: '',
    alias: '',
    age: 0,
  isActiveMember: true,
  };

  members: JusticeLeagueMember[] = [];

  constructor() { }

  ngOnInit() {
  }

}
