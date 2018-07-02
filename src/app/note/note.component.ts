import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  //FormControl,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Note } from './notes.model';
import { NoteDetail } from './note.details';
//import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  noteForm: FormGroup;
  title: AbstractControl;
  description: AbstractControl;
  content: AbstractControl;
  notes: Note[];
  detail: NoteDetail;
  //details: DetailsComponent;

  constructor(noteFormBuilder: FormBuilder) {
      this.noteForm = noteFormBuilder.group({
        'title': ['', Validators.required],
        'description': ['', Validators.required],
        'content': ['', Validators.required]
      });
      this.title = this.noteForm.controls['title'];
      this.description = this.noteForm.controls['description'];
      this.content = this.noteForm.controls['content'];
      this.notes = [];
      //this.details = new DetailsComponent();
      this.detail = new NoteDetail();
   }

  ngOnInit() {
  }

  addNote(value) {
    this.notes.push(new Note(value.title, value.description, value.content));
  };

  removeNote(value: Note) {
    this.notes.splice(this.notes.indexOf(value), 1);
    if (value.getContent() == this.detail.content && value.getDescription() == this.detail.description && value.getTitle() == this.detail.title) {
      this.showDetails(new Note('', '', ''));
    }
  };

  showDetails(value: Note) {
    this.detail.setDetails(value);
  };

}
