/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rethink Sans', 'sans-serif'],
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
          primary: '#0F0F13', // 主背景色
          secondary: 'rgba(26, 26, 31, 0.5)', // 次背景色，如 header 和卡片背景
          card: '#1E1F23',
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
        // 邊框和分隔線
        border: {
          primary: 'rgba(136, 168, 158, 0.15)', // 主要邊框
          secondary: 'rgba(255, 255, 255, 0.05)', // 次要邊框
        },
        // 漸層色系
        gradient: {
          purple: 'linear-gradient(90deg, #784FFE 0%, #9C7FFF 100%)',
          card: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
          text: 'linear-gradient(90deg, #FFEB83 0%, #FFBF83 27%, #E677E9 68%, #B283FF 100%)',
          main: 'linear-gradient(90deg, #FFEB83 0%, #FFBF83 33%, #E677E9 66%, #B283FF 100%)',
        },
      },
      // 添加自定義陰影
      boxShadow: {
        card: '0px 4px 24px rgba(0, 0, 0, 0.25)',
        dropdown: '0px 8px 32px rgba(0, 0, 0, 0.32)',
      },
      // 添加自定義圓角
      borderRadius: {
        card: '16px',
        button: '8px',
      },
    },
  },
  plugins: [],
  important: true,
  corePlugins: {
    preflight: false,
  },
};
