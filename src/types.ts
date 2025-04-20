export interface SearchResult {
  id: number;
  title: string;
  type: 'course' | 'tutorial' | 'story';
  description: string;
  url: string;
}
