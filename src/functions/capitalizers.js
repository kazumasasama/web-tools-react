export function capitalizeAll(str) {
  if (typeof str !== 'string' || !str) return str;
  return str.toUpperCase();
};

export default function capitalize(str) {
  if (typeof str !== 'string' || !str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
