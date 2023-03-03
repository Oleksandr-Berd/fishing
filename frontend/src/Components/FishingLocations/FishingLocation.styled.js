import styled from "styled-components";

export const ContainerFishingLocationCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerFishingLocation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FishingLocationList = styled.ul`
  list-style-type: none;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: #000;
`;

export const LocationFishesList = styled.ul`
  list-style-type: none;
  text-decoration: none;
  padding: 0;
  color: #000;
`;

export const ItemFishesListStyled = styled.li`
  text-decoration: none;
  color: #000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  margin-top: 15px;
  padding: 10px;
`;

export const TitleFishingLocationList = styled.h1`
  color: #000;
  font-style: italic;
  font-weight: bold;
  padding: 15px;
`;

export const ContainerPicturesPreciseLocation = styled.div`
  display: inline-block;
  flex-direction: row;
  align-items: center;
`;

export const ContainerPreciseLocation = styled.div`
  display: inline-block;
`;

export const ListPicturesPreciseLocation = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

export const ItemPicturePreciseLocation = styled.li`
  margin-right: 15px;
`;

export const ListFishPreciseLocation = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`;

export const ItemFishPreciseLocation = styled.li`
  margin-right: 15px;
`;

export const ContainerTextPreciseLocation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: last baseline;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-right: 25px;
`;

export const ContainerMapPreciseLocation = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-around;
  padding: 24px 0;
`;
