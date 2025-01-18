import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private formsApiUrl: string = 'environment.GoogleSheetsAPI';

  constructor(private http: HttpClient) {}

  submitForm(formData: FormData): Observable<any> {
    return this.http.post(this.formsApiUrl, formData);
  }
}
