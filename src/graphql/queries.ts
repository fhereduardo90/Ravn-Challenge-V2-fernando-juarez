import { gql } from '@apollo/client';

export const PEOPLE_METADATA_QUERY = gql`
  query allPeopleMetadata {
    _allPersonsMeta {
      count
    }
  }
`;

export const ALL_PEOPLE_QUERY = gql`
  query GetAllPeople($first: Int, $skip: Int) {
    allPersons(first: $first, skip: $skip) {
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
