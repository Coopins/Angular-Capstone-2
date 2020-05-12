import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JusticeLeagueMember } from '../interfaces/justice-league-member';

@Injectable({
  providedIn: 'root'
})
export class JusticeLeagueService {

  constructor(
    private httpClient: HttpClient) { }

    async getMembers() {
      return this.httpClient.get<JusticeLeagueMember[]>('${this.baseUrl}justiceleague').toPromise();
    }

    async addMember(member: JusticeLeagueMember) {
      return await this.httpClient.post<JusticeLeagueMember>('${this.baseUrl}justiceleage', member).toPromise();
    }

    }
