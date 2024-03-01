import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://jsonplaceholder.typicode.com';

  urlForFindRecord(id, modelName, snapshot) {
    return `${this.host}/${modelName}s/${id}`;
  }
}