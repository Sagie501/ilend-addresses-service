import { DataSource } from 'apollo-datasource';
import fs from 'fs';
import path from 'path';

export class AddressConnector extends DataSource {

  countries: Array<string>;
  cities: Array<any>;

  constructor() {
    super();
    fs.readFile(path.join(__dirname, '/../..', '/resources/countries.json'), 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }
      this.countries = JSON.parse(data).sort();
    });

    fs.readFile(path.join(__dirname, '/../..', '/resources/cities.json'), 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }
      this.cities = JSON.parse(data);
    });
  }

  getAllCountries() {
    return this.countries;
  }

  getCitiesByCountry(countryName: string) {
    return this.cities[countryName].sort();
  }

  getCitiesByCountries(countriesNames: Array<string>) {
    let result = [];
    countriesNames.forEach((countryName) => {
      result = result.concat(this.cities[countryName]);
    });
    return result.sort();
  }
}
