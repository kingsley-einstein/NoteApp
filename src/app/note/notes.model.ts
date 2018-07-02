export class Note {

    title: string;
    description: string;
    content: string;

    constructor(title: string, description: string, content: string) {
        this.title = title;
        this.description = description;
        this.content = content;
    }

    getTitle() {
        return this.title;
    };
    
    getDescription() {
        return this.description;
    };

    getContent() {
        return this.content;
    };
}