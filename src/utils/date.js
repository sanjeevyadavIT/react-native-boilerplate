export const getLastWeekDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7); // Get date from 7 days before
  return date.toISOString().split('T')[0]; // Format date in yyyy-mm-dd form
}
