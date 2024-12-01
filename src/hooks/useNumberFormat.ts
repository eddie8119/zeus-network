interface UseNumberFormatOptions {
  maximumFractionDigits?: number;
  useGrouping?: boolean;
  locale?: string;
}

export const useNumberFormat = (options: UseNumberFormatOptions = {}) => {
  // 默認值
  const {
    maximumFractionDigits = 0,    // 小數位數，默認為0（不顯示小數）
    useGrouping = true,           // 是否使用千位分隔符，默認為true
    locale = 'en-US'
  } = options;

  const formatNumber = (value: number): string => {
    return value.toLocaleString(locale, {
      maximumFractionDigits,
      useGrouping,
    });
  };

  const parseNumber = (value: string): number => {
    return Number(value.replace(/,/g, ''));
  };

  return {
    formatNumber,
    parseNumber,
  };
};
