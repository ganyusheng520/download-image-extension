// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

// 3. Custom color palette - Editorial/Magazine aesthetic
const colors = {
    brand: {
        50: '#f0f4f8',
        100: '#d9e2ec',
        200: '#bcccdc',
        300: '#9fb3c8',
        400: '#829ab1',
        500: '#627d98',
        600: '#486581',
        700: '#334e68',
        800: '#243b53',
        900: '#102a43',
    },
    accent: {
        50: '#fff5f5',
        100: '#fed7d7',
        200: '#feb2b2',
        300: '#fc8181',
        400: '#f56565',
        500: '#e53e3e',
        600: '#c53030',
        700: '#9b2c2c',
        800: '#742a2a',
        900: '#63171b',
    },
    highlight: {
        50: '#fef3c7',
        100: '#fde68a',
        200: '#fcd34d',
        300: '#fbbf24',
        400: '#f59e0b',
        500: '#d97706',
    }
}

// 4. Custom fonts - 使用系统默认字体
const fonts = {
    heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
    mono: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
}

// 5. Custom components styles
const components = {
    Button: {
        baseStyle: {
            fontWeight: '600',
            borderRadius: '8px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        variants: {
            solid: {
                _hover: {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
                _active: {
                    transform: 'translateY(0)',
                },
            },
        },
    },
    Tag: {
        baseStyle: {
            borderRadius: '6px',
            fontWeight: '600',
        },
        variants: {
            solid: {
                // 确保文字颜色与背景色有足够对比度
                color: 'brand.900',
            },
        },
    },
    Radio: {
        baseStyle: {
            _hover: {
                transform: 'scale(1.05)',
            },
        },
    },
}

// 6. extend the theme
const theme = extendTheme({ 
    config,
    colors,
    fonts,
    components,
    styles: {
        global: {
            body: {
                bg: 'brand.900',
                color: 'brand.50',
            },
        },
    },
})

export default theme
