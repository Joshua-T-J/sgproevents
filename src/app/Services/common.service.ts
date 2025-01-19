import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private formsApiUrl: string = environment.GoogleSheetsAPI;

  constructor(private http: HttpClient) {}

  submitForm(formData: FormData): Observable<any> {
    return this.http.post(this.formsApiUrl, formData);
  }
}
