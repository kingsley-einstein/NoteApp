import { Note } from "./notes.model";

export class NoteDetail {
    title: string;
    description: string;
    content: string;

    setDetails(value: Note) {
        this.title = value.getTitle();
        this.description = value.getDescription();
        this.content = value.getContent();
    }
}