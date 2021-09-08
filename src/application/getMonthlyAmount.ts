const getMonthlyAmount = (
  totalAmounth: number,
  totalMonths: number
): number => {
  // times 100 and then divided by 100 to prevent
  // calculation rounding errors with floating values
  const result = (totalAmounth * 100) / totalMonths / 100;

  return isNaN(result) ? 0 : result;
};

export default getMonthlyAmount;
