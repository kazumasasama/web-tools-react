function capitalize(str) {
  if (typeof str !== 'string' || !str) return str;
  return str.toUpperCase();
};

export default capitalize;