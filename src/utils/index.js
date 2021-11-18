export const isTruthy = (value) => value === 0 || !!value;

export const cleanObject = (object) => {
  let result = {};
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (isTruthy(value)) result[key] = value;
  });

  return result;
};
