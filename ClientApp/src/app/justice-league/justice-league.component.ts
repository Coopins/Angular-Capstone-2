import { Component, OnInit } from '@angular/core';
import { JusticeLeagueMember } from '../interfaces/justice-league-member';
import { JusticeLeagueService } from '../services/justice-league.service';

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

  constructor(private service: JusticeLeagueService) { }

 async ngOnInit() {
    this.members = await this.service.getMembers();
  }

 async save() {
const newMember = await this.service.addMember(this.member);
this.members.push(newMember);
console.log(newMember);
}
}
