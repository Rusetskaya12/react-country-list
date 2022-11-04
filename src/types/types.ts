export interface ICountry {
  population: number;
  area: number;
  region: string;
  capital: string;
  name: string;
  flag: string;
}

export interface ICountryAPI {
  area: number;
  region: string;
  capital: string[];
  name: ICountryName;
  flags: ICountryFlag;
  population: number;
}

interface ICountryNativeName {
  [lang: number]: ICountryNativeName;
}

interface ICountryName {
  common: string;
  nativeName: ICountryNativeName;
  official: string;
}

interface ICountryFlag {
  png: string;
  svg: string;
}
