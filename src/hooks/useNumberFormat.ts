interface UseNumberFormatOptions {
  maximumFractionDigits?: number;
  useGrouping?: boolean;
  locale?: string;
}

export const useNumberFormat = (options: UseNumberFormatOptions = {}) => {
  // 默認值
  const {
    maximumFractionDigits = 18, // 小數位數，默認為0（不顯示小數）
    useGrouping = true, // 是否使用千位分隔符，默認為true
    locale = 'en-US',
  } = options;

  const formatNumber = (value: number): string => {
    return value.toLocaleString(locale, {
      maximumFractionDigits,
      useGrouping,
    });
  };

  const parseNumber = (value: string): number => {
    // 移除所有非數字字符（除了小數點）
    const cleanValue = value?.replace(/[^\d.]/g, '') || '';

    // 如果是純小數點或空字符串，返回 0
    if (cleanValue === '.' || !cleanValue) return 0;

    // 一般情況
    return parseFloat(cleanValue);
  };

  const inputFormatNumber = (value: string): string => {
    const parsedValue = parseNumber(value);
    return formatNumber(parsedValue);
  };

  return {
    formatNumber,
    inputFormatNumber,
    parseNumber,
  };
};
