import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/Note';

import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes:Note[];

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes; 
    });
  }

  deleteNote(note:Note){
    // reapplying the id because the id keeps getting set to 201?
    for(let i=0; i<this.notes.length;i++){
      this.notes[i].id = i;
    }
    //deletes the note from the UI
    this.notes = this.notes.filter(n => n.id !== note.id);
    //deletes the note from the server
    this.noteService.deleteNote(note).subscribe();
  }
 
  addNote(note:Note){
    this.noteService.addNote(note).subscribe(note => { this.notes.push(note)});
   }

}
