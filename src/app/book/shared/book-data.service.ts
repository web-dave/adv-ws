import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './book';

@Injectable()
export class BookDataService {
  private endpoint = 'http://localhost:4730/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(`${this.endpoint}`);
  }

  getBookByIsbn(isbn: string): Observable<IBook> {
    return this.http.get<IBook>(`${this.endpoint}/${isbn}`);
  }

  createBook(book: IBook): Observable<IBook> {
    return this.http.post<IBook>(`${this.endpoint}`, book);
  }

  updateBook(isbn: string, vector: any): Observable<IBook> {
    return this.http.patch<IBook>(`${this.endpoint}/${isbn}`, vector);
  }
}
