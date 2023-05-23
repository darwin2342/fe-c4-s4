import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit {
  notes: Note[] = [];
  searchText: string = '';
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  onNoteAdded(note: Note): void {
    this.notes.push(note);
  }

  onSearchTextChanged(): void {
    if (this.searchText.trim() !== '') {
      this.noteService.getNotes()
        .subscribe(notes => this.notes = notes.filter(note => note.title.toLowerCase().includes(this.searchText.trim().toLowerCase())));
    } else {
      this.getNotes();
    }
  }
}
