export interface Issue {
    number: number;
    date: string;
    heroImage: string;
    announcements: string[];
    intro: string;
    events: Event[];
}

export interface Event {
    title: string;
    description: string;
    photos?: string[];
}
