interface UseNumberFormatOptions {
  maximumFractionDigits?: number;
  useGrouping?: boolean;
  locale?: string;
}

export const useNumberFormat = (options: UseNumberFormatOptions = {}) => {
  const {
    maximumFractionDigits = 0,
    useGrouping = true,
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
