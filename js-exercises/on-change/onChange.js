const addProxyToObjectPropertiesDeep = (obj, handler) => {
  if (typeof obj === 'object') {
    for (const property of Object.getOwnPropertyNames(obj)) {
      if (typeof obj[property] === 'object') {
        addProxyToObjectPropertiesDeep(obj[property], handler);
        // eslint-disable-next-line no-param-reassign
        obj[property] = new Proxy(obj[property], handler);
      }
    }
  }
};

const throwErrorIfInvalidObject = (object) => {
  if (typeof object !== 'object' || object instanceof Map || object instanceof Set) {
    throw TypeError(`Found ${object} type of ${typeof object}. Required type of ${typeof {}} `);
  }
};

const throwErrorIfInvalidFunction = (funcxtion) => {
  if (!(funcxtion instanceof Function)) {
    throw TypeError(`Found ${funcxtion} type of ${typeof funcxtion}. Required type of ${typeof (() => { })}`);
  }
};

const onChange = (obj, onChangeFn) => {
  throwErrorIfInvalidObject(obj);
  throwErrorIfInvalidFunction(onChangeFn);

  const handler = {
    set(target, property, value) {
      // eslint-disable-next-line no-param-reassign
      target[property] = value;
      onChangeFn();
      return true;
    },
    defineProperty() {
      onChangeFn();
      return true;
    },
    deleteProperty() {
      onChangeFn();
      return true;
    },
  };

  addProxyToObjectPropertiesDeep(obj, handler);
  const proxyObj = new Proxy(obj, handler);
  return proxyObj;
};

export { onChange };
