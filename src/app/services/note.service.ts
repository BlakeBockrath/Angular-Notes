import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../models/Note';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  }) 
}
@Injectable({
  providedIn: 'root'
})
export class NoteService {
  noteUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=3';

  constructor(private http:HttpClient) { }

  //get notes 
  getNotes():Observable<Note[]> {
    return this.http.get<Note[]>(`${this.noteUrl}${this.todosLimit}`);
  }

  //delete note 
  deleteNote(note:Note):Observable<Note>{
    const url = `${this.noteUrl}/${note.id}`;
    return this.http.delete<Note>(url,httpOptions);
  }

  //Add note 
  addNote(note:Note):Observable<Note>{
    return this.http.post<Note>(this.noteUrl, note, httpOptions);
  }

  //toggle completed
  toggleCompleted(note:Note):Observable<any>{
    const url = `${this.noteUrl}/${note.id}`;
    return this.http.put(url, note, httpOptions);
  }
}
