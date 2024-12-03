/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rethink Sans'],
      },
      fontWeight: {
        extrabold: 800,
      },
      fontSize: {
        17: '17px',
      },
      colors: {
        // 背景色系
        background: {
          primary: '#0F0F13',
          panel: '#27272E',
          tab: '#202028',
          input: '#16161B',
        },
        // 主題色系
        primary: {
          btc: '#FFEB83',
          zeus: '#FD83FF',
        },
        // 功能色系
        status: {
          success: '#4CAF50', // 成功狀態tailwind.config
          warning: '#FFA726', // 警告狀態
          error: '#EF5350', // 錯誤狀態
        },
        // 文字色系
        text: {
          primary: '#F1F0F3', // 最亮/主要文字
          light: '#C7C5D1',
          medium: '#C5C5CF',
          dark: '#8B8A9E',
          disabled: '#6B7280',
        },
      },
    },
  },
  plugins: [],
  important: true,
  corePlugins: {
    preflight: false,
  },
};
