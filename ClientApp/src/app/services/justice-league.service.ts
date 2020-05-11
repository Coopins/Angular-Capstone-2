import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core/testing';
import { JusticeLeagueMember } from '../interfaces/justice-league-member';

@Injectable({
  providedIn: 'root'
})
export class JusticeLeagueService {

  constructor(
    private httpClient: HttpClient,
    @inject('BASE_URL')private baseUrl: string) { }

    async getMembers() {
      return this.httpClient.get<JusticeLeagueMember[]>('${this.baseUrl}justiceleague').toPromise();
    }

    async addMember(member: JusticeLeagueMember) {
      return await this.httpClient.post<JusticeLeagueMember>('${this.baseUrl}justiceleage', member).toPromise();
    }

    }
