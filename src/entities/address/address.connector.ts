import { DataSource } from 'apollo-datasource';
import fs from 'fs';
import path from 'path';

export class AddressConnector extends DataSource {

  countries: Array<string>;
  cities: any;

  constructor() {
    super();
    fs.readFile(path.join(__dirname, '/../..', '/resources/countries.json'), 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }
      this.countries = JSON.parse(data);
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
    return this.cities[countryName];
  }
}
