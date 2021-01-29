import { IBook } from './book';

export function emptyBook(): IBook {
  return {
    id: '',
    title: '',
    subtitle: '',
    isbn: '',
    abstract: '',
    numPages: 0,
    author: '',
    publisher: {
      name: '',
      url: ''
    }
  };
}
