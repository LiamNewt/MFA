export interface SearchResult {
    Search: MovieResults[];
    totalResults?: string;
    Response: string;
    Error?: string;
}

export interface MovieResults {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Plot: string;
    Director: string;
    Ratings: Ratings[];
}
export interface Ratings {
    Source: string;
    Value: string;
}
