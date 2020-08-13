import { gql } from '@apollo/client';

export const ALL_PEOPLE_QUERY = gql`
  query GetAllPeople {
    allPersons {
      id
      birthYear
      name
      eyeColor
      hairColor
      skinColor
      species {
        id
        name
      }
      homeworld {
        id
        name
      }
      vehicles {
        id
        maxAtmospheringSpeed
        name
      }
    }
  }
`;

export const GET_PERSON_QUERY = gql`
  query GetPerson($id: ID!) {
    Person(id: $id) {
      id
      birthYear
      name
      eyeColor
      hairColor
      skinColor
      species {
        id
        name
      }
      homeworld {
        id
        name
      }
      vehicles {
        id
        maxAtmospheringSpeed
        name
      }
    }
  }
`;
