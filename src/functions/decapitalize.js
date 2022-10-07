function decapitalize(str) {
  if (typeof str !== 'string' || !str) return str;
  return str.toLowerCase();
};

export default decapitalize;