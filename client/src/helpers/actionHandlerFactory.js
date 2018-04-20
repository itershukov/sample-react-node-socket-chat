/**
 * Created by itersh on 19.02.2018.
 */
import unionBy from 'lodash.unionby';

export function buildDefaultActionHandlers(namespace, methods, types) {
  const apiActionTypes = methods
    .reduce(
      (r, method) => [
        ...r,
        `${method}_START`,
        `${method}_SUCCESS`,
        `${method}_ERROR`
      ],
      []
    )
    .reduce(
      (r, action) => [
        ...r,
        ...types.map(type => `${type.toUpperCase()}_${action}`)
      ],
      []
    );

  return apiActionTypes.reduce((result, handler) => {
    result[handler] = (state, action) =>
      Object.assign({}, state, action.payload);
    return result;
  }, {});
}

export function buildCRUDActionHandlers(namespace, types, options = {}) {
  let r = {};
  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    r = Object.assign(
      {},
      r,
      buildDefaultActionHandlers(
        namespace,
        ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        [type]
      )
    );
    r = Object.assign(
      {},
      r,
      buildDefaultActionHandlers(namespace, ['GET'], [`${type}s`])
    );

    const key = options[type] ? options[type].key : 'id';

    const GET = buildSuccessActionType('GET', type),
      GET_ALL = buildSuccessActionType('GET', type + 's'),
      POST = buildSuccessActionType('POST', type),
      PUT = buildSuccessActionType('PUT', type),
      PATCH = buildSuccessActionType('PATCH', type),
      DELETE = buildSuccessActionType('DELETE', type);

    r[GET] = r[POST] = r[PUT] = r[PATCH] = (state, action) => ({
      ...state,
      ...action.payload,
      list: unionBy([action.payload[type]], state.namespace.list, key),
      receivedAt: new Date().toISOString()
    });

    r[DELETE] = (state, action) => ({
      ...state,
      ...action.payload,
      list: state.namespace.list.filter(
        el => el[key] !== action.payload[type][key]
      ),
      receivedAt: new Date().toISOString()
    });

    r[GET_ALL] = (state, action) => ({
      ...state,
      ...action.payload,
      receivedAt: new Date().toISOString()
    });
  }
  return r;
}

export function buildStartActionType(method, type) {
  return `${type.toUpperCase()}_${method}_START`;
}
export function buildSuccessActionType(method, type) {
  return `${type.toUpperCase()}_${method}_SUCCESS`;
}
export function buildErrorActionType(method, type) {
  return `${type.toUpperCase()}_${method}_ERROR`;
}
