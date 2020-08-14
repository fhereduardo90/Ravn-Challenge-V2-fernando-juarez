export type VehicleType = {
  id: string;
  maxAtmospheringSpeed: number;
  name: string;
};

export type PersonType = {
  id: string;
  name: string;
  birthYear?: string;
  eyeColor?: string[];
  hairColor?: string[];
  skinColor?: string[];
  species?: Array<{
    id: string;
    name: string;
  }>;
  homeworld?: {
    id: string;
    name: string;
  };
  vehicles?: VehicleType[];
};
