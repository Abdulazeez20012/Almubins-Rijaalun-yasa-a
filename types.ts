
export interface Verse {
  id: string;
  lines: [string, string];
}

export interface Qasida {
  id: string;
  title: string;
  verses: Verse[];
}

export enum TextSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type Page = 'splash' | 'home' | 'qasida' | 'favorites';
