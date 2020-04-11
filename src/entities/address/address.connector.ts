import { DataSource } from 'apollo-datasource';

export class AddressConnector extends DataSource {

  constructor() {
    super();
  }

  async getAllCountries() {

  }

  async getCitiesByCountry(countryName: string) {

  }
}
