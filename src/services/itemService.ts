import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/Types';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'https://localhost:7255/api';

  getAllItem(): Observable<IItem[]> {
    return this.http.get<IItem[]>(`${this.baseUrl}/items`);
  }
}
