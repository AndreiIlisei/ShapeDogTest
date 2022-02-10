export interface Dog {
    breed: string;
    picture: string;
    subBreeds: string;
}


export interface GetDogsResults {
    results: Dogs[];
}

export interface Dogs {
    message: [String: [String]]
    status: String
}

export interface HeaderProps { }

export interface LayoutProps { }

export interface Favourite { }
