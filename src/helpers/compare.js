/**
 * Helper function to sort an
 * array of objects
 *
 * @param {string} a
 * @param {string} b
 */
export const compare = (a, b) => {
  const nameA = a.givenName.toUpperCase();
  const nameB = b.givenName.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
};
