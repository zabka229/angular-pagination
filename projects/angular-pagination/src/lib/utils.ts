export const iterateValue = (value: string[], isArray = false): any => {
  if (value.length) {
    if (value.length === 1 && !isArray) {
      return parseValue(value[0]);
    } else {
      return [...value.map((el: string) => parseValue(el))];
    }
  }
  return null;
};

export const parseValue = (value: any): any => {
  if (!Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
    value = Number(value);
  } else if (value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
    value = value.toLowerCase() === 'true';
  } else if (value !== null && !Number.isNaN(new Date(value).getDate())) {
    value = new Date(value);
  }
  return value;
};
