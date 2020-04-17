import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { Note } from 'src/app/models/Note';
import { NoteService } from '../../services/note.service';


@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note:Note; 
  @Output() deleteNote:EventEmitter<Note> = new EventEmitter();
  notes:Note[];

  constructor(private noteService:NoteService) { }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes; 
    });
  }

  //set dynamic classes 
  setClasses() {
    let classes ={
      note: true,
      'is-complete': this.note.completed
    }

    return classes;
  }

  
  onToggle(note){
    // toggle in the UI
    note.completed = !note.completed;
     
    // toggle  on the server but wont work because id is acting up
    // this.noteService.toggleCompleted(note).subscribe( note => console.log(note));
  }

  onDelete(note){
    this.deleteNote.emit(note);
  }

}
