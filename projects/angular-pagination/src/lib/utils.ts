export const parseValue = (value: any): any => {
    if (!Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
      value = Number(value);
    } else if (value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
      value = value.toLowerCase() === 'true';
    }
    return value;
}