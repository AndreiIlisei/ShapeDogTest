import { randomBytes } from "crypto";
import { GetStaticProps } from "next/types";
import Layout from "../../components/Layout";
import { FETCH_BREEDS } from "../../helpers/constants";
import { DogCard, DogImage, DogName } from "../../styles/DogCard";
import theme from "../../styles/theme";
import { Dog } from "../../types";
import { v4 } from "uuid";


export default function DogPage({ dogs, dogName }: any) {
  console.log(dogs)

  return (
    <Layout>
      {dogs.map((dog: Dog) => {
        return (
          <div key={v4()}>
            <DogCard>
              <DogImage src={dog.picture} />
              <DogName theme={theme}>{dogName}</DogName>
            </DogCard>
          </div>
        );
      })}
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

  const dogs = await Promise.all(
    Object.keys(data.message).map(async () => {
      const res = await fetch(`https://dog.ceo/api/breed/${dogName}/images/random/1`);
      const pictureData = await res.json();

      return { picture: pictureData.message };
    })
  );

  return {
    props: { dogs, dogName },
  };
};

