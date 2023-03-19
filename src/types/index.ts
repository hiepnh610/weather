export interface LocationType {
  country: string;
  lat: number;
  lon: number;
  name: string;
}

export interface WeatherTabIdType {
  [index: string]: string;
}

export interface WeatherTabType {
  id: string;
  text: string;
}
