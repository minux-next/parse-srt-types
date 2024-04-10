interface SrtItem {
    id: number;
    start: number;
    end: number;
    text: string;
}

declare function parseSRT(data: string): Array<SrtItem>;

export = lrcParser;
