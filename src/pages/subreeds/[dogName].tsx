import { GetStaticProps } from "next/types";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Layout from "../../components/Layout";
import { Button, DogCard, DogImage, DogName } from "../../styles/DogCard";
import theme from "../../styles/theme";
import { Dog } from "../../types";

export default function DogPage({ dogs }: any) {
  const [subBreeds, setSubBreeds] = useState<Dog[]>([]);

  useEffect(() => {
    if (dogs) {
      setSubBreeds(dogs);
    }
  }, []);

  // useEffect(() => {
  //   var favouriteSubBreedPicture = JSON.parse(localStorage.getItem("favPic"));
  //   if (favouriteSubBreedPicture === null) {
  //     setSubBreeds(dogs);
  //   } else {
  //     favouriteSubBreedPicture = favouriteSubBreedPicture.filter((subBreedName: Dog) => subBreedName.picture !== dogs.picture);
  //   }
  //   localStorage.setItem("favPic", JSON.stringify(favouriteSubBreedPicture));
  //   setSubBreeds(dogs);
  // }, []);

  const saveToLocalStorage = (item: any) => {
    var favouriteSubBreedPicture = JSON.parse(localStorage.getItem("favPic") || "null");
    if (favouriteSubBreedPicture === null) {
      const favDogs = [item];
      localStorage.setItem("favPic", JSON.stringify(favDogs));
    } else {
      if (item.liked) {
        favouriteSubBreedPicture.push(item);
      } else {
        favouriteSubBreedPicture = favouriteSubBreedPicture.filter((subBreedName: Dog) => subBreedName.picture !== item.picture);
      }
      localStorage.setItem("favPic", JSON.stringify(favouriteSubBreedPicture));
    }
  };

  const isLiked = (picture: string) => {
    const favouriteSubBreedPicture = JSON.parse(localStorage.getItem("favPic") || "null");
    var likedDog = null;
    if (favouriteSubBreedPicture !== null) {
      likedDog = favouriteSubBreedPicture.find((dog: { picture: string }) => dog.picture === picture);
    }
    return likedDog && likedDog.liked;
  };

  const setFavouriteImage = (picture: string) => {
    if (subBreeds) {
      const newSubBreeds = [...subBreeds];
      const getSubBreedPicture = newSubBreeds.find((subBreedName) => subBreedName.picture === picture);

      if (getSubBreedPicture) {
        getSubBreedPicture.liked = !getSubBreedPicture.liked;
      }
      setSubBreeds(newSubBreeds);
      saveToLocalStorage(getSubBreedPicture);
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
            <DogName theme={theme}>{getSubBreedName(subBreedName.picture)}</DogName>
            {/* <AddFavourite onClick={() => setFavouriteImage(subBreedName.picture)} /> */}
            <Button onClick={() => setFavouriteImage(subBreedName.picture)}>
           {isLiked(subBreedName.picture) ?  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg> : <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="grey" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>}
            </Button>
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
