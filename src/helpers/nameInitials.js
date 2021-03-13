/**
 *
 * @param {string} firstname
 * @param {string} lastname
 *
 * @returns {string}
 */
export const nameInitials = (firstname, lastname) => {
  return `${firstname?.split('')[0]}${lastname?.split('')[0]}`;
};
