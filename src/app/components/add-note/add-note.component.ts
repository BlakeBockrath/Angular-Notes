import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  @Output() addNote: EventEmitter<any> = new EventEmitter();
  
  title:string;
  text:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    const note = {
      title: this.title,
      text: this.text,
      compeleted: false
    }

    this.addNote.emit(note);
  }
}
