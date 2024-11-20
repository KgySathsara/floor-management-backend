export interface Table {
    id?: number;
    name: string;
    type: 'square' | 'round';
    minCovers: number;
    maxCovers: number;
    active: boolean;
  }
  