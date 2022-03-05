import React from "react";

export interface Dog {
    id: string;
    breed: string;
    picture: string;
    subBreeds: string;
    liked: boolean;
};

export interface DogsProps {
    dogs: Dog[];
    dogName: string;
}

export interface dogPictureData {
    breed: string;
    picture: string;
    subBreeds: string;
    id: string;
    liked: boolean;
}

export interface DogsNew {
    data: dogPictureData[];
    children?: React.ReactNode;
}

export interface PropForFavourite {
    name: string;
    picture: string;
}

export interface GetDogsResults {
    results: Dogs[];
}

export interface Dogs {
    message: [String: [String]]
    status: String
}


export interface SlugParams {
    params: {
        dogName: string
    }
}

export interface HeaderProps { }

export interface LayoutProps { }

export interface Favourite { }
