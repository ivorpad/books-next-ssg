export interface Book {
  id:             number;
  title:          string;
  authors:        Author[];
  translators:    any[];
  subjects:       string[];
  bookshelves:    any[];
  languages:      string[];
  copyright:      boolean;
  media_type:     string;
  formats:        Formats;
  download_count: number;
}

export interface Author {
  name:       string;
  birth_year: number;
  death_year: number;
}

export interface Formats {
  "application/octet-stream":       string;
  "application/zip":                string;
  "image/jpeg":                     string;
  "text/plain":                     string;
  "application/epub+zip":           string;
  "application/x-mobipocket-ebook": string;
  "application/rdf+xml":            string;
  "text/plain; charset=us-ascii":   string;
  "text/html":                      string;
}
