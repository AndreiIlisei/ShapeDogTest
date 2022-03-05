import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Props, ReactNode, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { FETCH_BREEDS } from "../helpers/constants";
import { DogCard, DogImage, DogName } from "../styles/DogCard";
import theme from "../styles/theme";
import { Dog, DogsNew } from "../types";

const Home: NextPage<DogsNew> = ({ data }: DogsNew) => {
  const [fetchedDogs, setFetchedDogs] = useState<Dog[]>([]);

  useEffect(() => {
    if (data) {
      setFetchedDogs(data);
    }
  }, []);

  if (!fetchedDogs) {
    return <> There are no dogs </>;
  }

  return (
    <Layout>
      {fetchedDogs.map((dog: Dog) => {
        return (
          <div key={dog.breed}>
            <Link href={`/subreeds/${dog.breed}`}>
              <DogCard>
                <DogImage src={dog.picture} />
                <DogName theme={theme}>{dog.breed}</DogName>
              </DogCard>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(FETCH_BREEDS);
  const data = await res.json();

  const dogPictureData = await Promise.all(
    Object.keys(data.message).map(async (item) => {
      const res = await fetch(
        `https://dog.ceo/api/breed/${item}/images/random`
      );
      const pictureData = await res.json();

      return {
        breed: item,
        picture: pictureData.message,
        subBreeds: data.message[item],
      };
    })
  );

  return {
    props: {
      data: dogPictureData,
    },
  };
};

export default Home;
