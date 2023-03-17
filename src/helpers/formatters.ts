export const formatDecimal = (price: number): string => {
  return price.toLocaleString('en', {
    useGrouping: false,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
