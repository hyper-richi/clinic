export type Mods = Record<string, boolean | string | undefined>;

export interface DataQuestions {
    data: Question[];
}

export interface Question {
    id: string;
    title: string;
    description: string;
}

export interface SlideItem {
    id: string;
    title: string;
    target: string;
    list: Array<string>;
    pictureSrc: string;
    total: number;
    discount: number;
}
