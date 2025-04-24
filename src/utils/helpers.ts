/**
 * Generates a random percentage change based on the current value
 * @param currentValue Current percentage value
 * @param volatility How much the value can change (higher = more volatile)
 * @returns New percentage value
 */
export const generateRandomPercentageChange = (
  currentValue: number, 
  volatility: number = 0.2
): number => {
  // Generate random change between -volatility and +volatility
  const change = (Math.random() * volatility * 2) - volatility;
  // Apply change while preserving the sign (positive/negative) of the original value
  if (currentValue === 0) return change;
  
  const sign = Math.sign(currentValue);
  const absValue = Math.abs(currentValue);
  const newAbsValue = absValue + (absValue * change);
  
  // Ensure we don't flip the sign accidentally for very small numbers
  return newAbsValue < 0.01 ? 0.01 * sign : newAbsValue * sign;
};

/**
 * Formats a number as currency
 * @param value Number to format
 * @returns Formatted string
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * Formats a large number with proper abbreviations (K, M, B, T)
 * @param value Number to format
 * @returns Formatted string
 */
export const formatLargeNumber = (value: number): string => {
  if (value >= 1_000_000_000_000) {
    return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
  } else if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`;
  } else if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  } else if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(2)}K`;
  } else {
    return `$${value.toFixed(2)}`;
  }
};

/**
 * Formats a percentage value
 * @param value Percentage value
 * @returns Formatted string with % sign
 */
export const formatPercentage = (value: number): string => {
  return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
};

/**
 * Determines color based on positive/negative value
 * @param value Number value
 * @returns CSS color string
 */
export const getColorByValue = (value: number): string => {
  if (value > 0) return '#16c784'; // Green for positive
  if (value < 0) return '#ea3943'; // Red for negative
  return '#a6b0c3'; // Gray for zero
}; 