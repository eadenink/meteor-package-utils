/** @type {import('../types').GetDate} */
export const getDate = ({ minusDays }) => {
  // Create a new Date object representing the current date and time
  const currentDate = new Date();
  let resultDate = currentDate;

  if (minusDays > 0) {
    resultDate = new Date(
      currentDate.getTime() - minusDays * 24 * 60 * 60 * 1000
    );
  }

  // Format the result in ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
  return resultDate.toISOString();
};
