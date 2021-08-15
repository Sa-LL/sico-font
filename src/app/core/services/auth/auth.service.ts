import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AuthInterface } from 'src/app/shared/interfaces/auth.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL_PATH: string = '/gerentes/signin';

  constructor(private http: HttpClient) {}
  postLogin(personal_info: AuthInterface): Observable<Record<string, string>> {
    return this.http
      .post<Record<string, string>>(
        environment.API_URL + this.URL_PATH,
        personal_info
      )
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
