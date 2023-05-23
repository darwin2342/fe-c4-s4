import { Component, EventEmitter, Output } from '@angular/core';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {
  note: Note = { id: 0, title: '', content: '' };
  constructor(private readonly noteService: NoteService) {}
  @Output() noteAdded = new EventEmitter<Note>();

  addNote(): void {
    this.noteService.addNote(this.note)
      .subscribe(
        note => {
          alert('Note Added');
          this.noteAdded.emit(note);
        },
        error => console.log(error)
      );
  }
}
