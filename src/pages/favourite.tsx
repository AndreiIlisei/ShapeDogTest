import * as React from "react";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Layout from "../components/Layout";
import { DogContainer, DropDownContainer, DropDownHeader, DropDownList, DropDownListContainer, FavouriteContainer, FilterContainer, FilterText, ListItem } from "../styles/Container";
import { DogCard, DogImage, DogName } from "../styles/DogCard";
import theme from "../styles/theme";
import { Dog } from "../types";

export default function FavSubBreed() {
  const [favouritePic, setfavouritePic] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All Breeds");
  const [filteredOptions, setFilteredOptions] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  // Check if the favPic exists.
  useEffect(() => {
    const favouriteDogs = localStorage.getItem("favPic");
    const savedDogs = JSON.parse(favouriteDogs || "null");
    if (savedDogs) {
      setfavouritePic(savedDogs);
    }
  }, []);

  // Get the name of the Dogs from the string.
  const getSubBreedName = (picture: string) => {
    return `${picture.split("/")[4]}`;
  };

  // Retreive all the names of the dogs that have been liked from the storage.
  const getBreedNames = () => {
    const breedNames = ["All Breeds"];
    favouritePic.map((name: any) => {
      const dogName = name.picture.split("/")[4];
      if (breedNames.indexOf(dogName) === -1) breedNames.push(dogName);
    });
    return breedNames;
  };

  // Const used so I can map over the names and add to the dropdown List.
  const getName = getBreedNames();

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    const filteredPictures = favouritePic.filter((el: any) => el.picture.indexOf(value) >= 0);

    setFilteredOptions(value === "All Breeds" ? favouritePic : filteredPictures);
  };

  const render = () => {
    if (selectedOption === "All Breeds") {
      return favouritePic.map((subBreedName: Dog) => {
        return (
          <div key={subBreedName.id}>
            <DogCard>
              <DogImage src={subBreedName.picture} />
              <DogName theme={theme}>{getSubBreedName(subBreedName.picture)}</DogName>
            </DogCard>
          </div>
        );
      });
    } else {
      return filteredOptions.map((subBreedName: Dog) => {
        return (
          <div key={subBreedName.id}>
            <DogCard>
              <DogImage src={subBreedName.picture} />
              <DogName theme={theme}>{getSubBreedName(subBreedName.picture)}</DogName>
            </DogCard>
          </div>
        );
      });
    }
  };

  return (
    <Layout>
      <FavouriteContainer>
        <FilterContainer>
          <FilterText> Filter by breed</FilterText>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>{selectedOption}</DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  {getName.map((name: any) => {
                    return (
                      <ListItem onClick={onOptionClicked(name)} key={v4()}>
                        {" "}
                        {name}{" "}
                      </ListItem>
                    );
                  })}
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </FilterContainer>
        <DogContainer>
          {render()}
          {/* {filteredOptions.map((subBreedName: Dog) => {
            return (
              <div key={subBreedName.id}>
                <DogCard>
                  <DogImage src={subBreedName.picture} />
                  <DogName theme={theme}>{getSubBreedName(subBreedName.picture)}</DogName>
                </DogCard>
              </div>
            );
          })} */}
        </DogContainer>
      </FavouriteContainer>
    </Layout>
  );
}
