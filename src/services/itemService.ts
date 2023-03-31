import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from 'src/Types';
import { environment } from 'src/environments';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private baseUrl: string | undefined;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getAllItem(): Observable<IItem[]> {
    return this.http.get<IItem[]>(`${this.baseUrl}/items`);
  }

  getItem(id: string): Observable<IItem> {
    return this.http.get<IItem>(`${this.baseUrl}/items/${id}`);
  }
}
