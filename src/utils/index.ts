export const isTruthy = (value: unknown) => value === 0 || !!value;

export const cleanObject = (object: Object) => {
  let result = {};
  Object.keys(object).forEach((key) => {
    // @ts-ignore
    const value = object[key];
    // @ts-ignore
    if (isTruthy(value)) result[key] = value;
  });

  return result;
};
