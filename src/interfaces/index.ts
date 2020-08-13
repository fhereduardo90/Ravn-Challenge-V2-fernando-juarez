export interface IVehicle {
  id: string;
  maxAtmospheringSpeed: number;
  name: string;
}

export interface IPerson {
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
  vehicles?: IVehicle[];
}
