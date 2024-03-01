import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class UserSerializer extends JSONAPISerializer {
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    let data = {
      id: payload.id,
      type: 'user',
      attributes: {
        ...payload,
        'created-at': '2019-01-01T00:00:00.000Z',
        'is-fake': true
      }
    };
    return super.normalizeFindRecordResponse(store, primaryModelClass, { data }, id, requestType);
  }
}