import { heroui } from '@heroui/theme'
import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/components/(divider|image).js',
  ],
  theme: {
    extend: {
      colors: {
        colorbrand: {
          burntSienna: {
            '50': '#fef4f2',
            '100': '#fee7e2',
            '200': '#ffd3c9',
            '300': '#fdb5a4',
            '400': '#f98a70',
            '500': '#f27052',
            '600': '#de4724',
            '700': '#bb381a',
            '800': '#9a321a',
            '900': '#802f1c',
            '950': '#461409',
          },
          midnightBlue: {
            '50': '#eef8ff',
            '100': '#dcf1ff',
            '200': '#b2e4ff',
            '300': '#6dcfff',
            '400': '#20b7ff',
            '500': '#009eff',
            '600': '#007ddf',
            '700': '#0063b4',
            '800': '#005495',
            '900': '#00457a',
            '950': '#00315c',
          },
          grayWhite: {
            '50': '#F6F6F6',
            '100': '#E7E7E7',
            '200': '#D1D1D1',
            '300': '#B0B0B0',
            '400': '#888888',
            '500': '#707070',
            '600': '#5D5D5D',
            '700': '#4F4F4F',
            '800': '#454545',
            '900': '#3D3D3D',
            '950': '#262626',
          },
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        DEFAULT: '0 0 0 1px hsl(var(--border))',
        sm: '0 1px 2px 0 hsl(var(--shadow))',
        md: '0 4px 6px -1px hsl(var(--shadow)), 0 2px 4px -1px hsl(var(--shadow))',
        lg: '0 10px 15px -3px hsl(var(--shadow)), 0 4px 6px -2px hsl(var(--shadow))',
        xl: '0 20px 25px -5px hsl(var(--shadow)), 0 10px 10px -5px hsl(var(--shadow))',
        '2xl': '0 25px 50px -12px hsl(var(--shadow))',
        inner: 'inset 0 2px 4px 0 hsl(var(--shadow))',
        none: 'none',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), heroui()],
} satisfies Config
