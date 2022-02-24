import * as React from "react";
import Layout from "../components/Layout";
import { DogCard, DogImage, DogName } from "../styles/DogCard";
import theme from "../styles/theme";
import { Dog } from "../types";

export default function FavSubBreed() {
  const favouriteSubBreedPicture = JSON.parse(localStorage.getItem("favPic") || "null");

  const getSubBreedName = (picture: string) => {
    return `${picture.split("/")[4]}`;
  };

  return (
    <Layout>
      {favouriteSubBreedPicture.map((subBreedName: Dog) => {
        return (
          <div key={subBreedName.id}>
            <DogCard>
              <DogImage src={subBreedName.picture} />
              <DogName theme={theme}>{getSubBreedName(subBreedName.picture)}</DogName>
            </DogCard>
          </div>
        );
      })}
    </Layout>
  );
}
