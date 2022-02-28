import { GetStaticProps } from "next/types";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import RedHeart from "../../helpers/redHeart";
import GreyHeart from "../../helpers/greyHeart";
import Layout from "../../components/Layout";

import { Button, DogCard, DogImage, DogName } from "../../styles/DogCard";
import theme from "../../styles/theme";
import { Dog } from "../../types";

export default function DogPage({ dogs }: any) {
  const [subBreeds, setSubBreeds] = useState<Dog[]>([]);

  useEffect(() => {
    if (subBreeds.length > 0) {
      const storageDogs = JSON.parse(localStorage.getItem("favPic") || "null");

      if (storageDogs) {
        const newDogs = [...subBreeds];

        storageDogs.forEach((dog: Dog) => {
          const newDog = newDogs.find((d) => d.picture === dog.picture);

          if (newDog) {
            newDog.liked = true;
          }
        });

        setSubBreeds(newDogs);
      }
    }
  }, [subBreeds]);

  useEffect(() => {
    if (dogs) {
      setSubBreeds(dogs);
    }
  }, []);

  const updateLocalStorage = (item: Dog) => {
    const storageFavPics: Dog[] = JSON.parse(localStorage.getItem("favPic") || "null");
    let updatedStorageFavPics;

    if (storageFavPics === null) {
      const favDogs = [item];
      localStorage.setItem("favPic", JSON.stringify(favDogs));
    } else {
      if (item.liked) {
        const shouldAddDog = storageFavPics.findIndex((dog) => dog.picture === item.picture) === -1;
        if (shouldAddDog) updatedStorageFavPics = [...storageFavPics, item];
      } else {
        const filteredPictures = storageFavPics.filter((dog) => dog.picture !== item.picture);
        updatedStorageFavPics = [...filteredPictures];
      }

      if (updatedStorageFavPics) {
        localStorage.setItem("favPic", JSON.stringify(updatedStorageFavPics));
      }
    }
  };

  const setFavouriteImage = (picture: string) => {
    if (subBreeds) {
      const newSubBreeds = [...subBreeds];
      const getSubBreedPicture = newSubBreeds.find((subBreedName) => subBreedName.picture === picture);
      console.log(newSubBreeds);
      if (getSubBreedPicture) {
        getSubBreedPicture.liked = !getSubBreedPicture.liked;
        updateLocalStorage(getSubBreedPicture);
      }
      setSubBreeds(newSubBreeds);
    }
  };

  const getSubBreedName = (picture: string) => {
    return `${picture.split("/")[4]}`;
  };

  return (
    <Layout>
      {subBreeds.map((subBreedName: Dog) => (
        <div key={subBreedName.id}>
          <DogCard>
            <DogImage src={subBreedName.picture} />
            <DogName theme={theme}>
              {getSubBreedName(subBreedName.picture)}
              <Button onClick={() => setFavouriteImage(subBreedName.picture)}>{subBreedName.liked ? <RedHeart /> : <GreyHeart />}</Button>
            </DogName>
          </DogCard>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await res.json();

  const paths = Object.keys(data.message).map((dogs) => ({
    params: { dogName: dogs },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { dogName }: any = params;
  const res = await fetch(`https://dog.ceo/api/breed/${dogName}/images`);
  const data = await res.json();

  const dogs = data.message.map((items: Dog) => {
    return { picture: items, liked: false, id: v4() };
  });

  return {
    props: { dogs, dogName },
  };
};
