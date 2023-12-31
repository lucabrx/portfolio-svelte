/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			screens: {
				xl: '1280px'
			},
			center: true,
			padding: {
				DEFAULT: '16px',
				xl: '32px'
			}
		},
		fontFamily: {
			'montserrat-bold': ['"Montserrat Bold"', 'sans-serif'],
			'montserrat-medium': ['"Montserrat Medium"', 'sans-serif'],
			'montserrat-regular': ['"Montserrat Regular"', 'sans-serif']
		},
		extend: {
			colors: {
				transparent: 'transparent',
				white: '#fefefe',
				'off-white': '#f7f8f8',
				'transparent-white': 'rgba(255, 255, 255, 0.08)',
				background: '#000212',
				grey: '#858699',
				'grey-dark': '#222326',
				'primary-text': '#b4bcd0'
			},
			spacing: {
				'navigation-height': 'var(--navigation-height)'
			},
			backgroundImage: {
				'primary-gradient': 'linear-gradient(to left top, rgb(88, 28, 135), rgb(70, 102, 241))',
				'title-gradient':
					'linear-gradient(to bottom, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))',
				'page-gradient':
					'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)',
				'hero-gradient':
					'radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)',
				'hero-glow':
					'conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)',
				'glow-lines':
					'linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)',
				'radial-faded': 'radial-gradient(circle at bottom center,var(--color),transparent 70%)',
				'glass-gradient':
					'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)',
				'glass-gradient2': 'linear-gradient(0deg, rgba(40,44,52,0.4) 0%, rgba(17,0,32,.2) 100%)'
			},
			boxShadow: {
				primary: 'rgb(147 51 234 / 50%) 0px 1px 40px',
				secondary: 'rgb(70 102 241 / 60%) 0px 1px 60px'
			},
			fontWeight: {
				normal: '400',
				medium: '500',
				bold: '700'
			},
			keyframes: {
				'fade-in': {
					from: { opacity: 0, transform: 'translateY(-10px)' },
					to: { opacity: 1, transform: 'none' }
				},
				'fade-out': {
					from: { opacity: 1, transform: 'none' },
					to: { opacity: 0, transform: 'translateY(10px)' }
				},
				'image-rotate': {
					'0%': { transform: 'rotateX(25deg)' },
					'25%': { transform: 'rotateX(25deg) scale(0.9)' },
					'60%': { transform: 'none' },
					'100%': { transform: 'none' }
				},
				'image-glow': {
					'0%': {
						opacity: 0,
						'animation-timing-function': 'cubic-bezier(0.74,0.25,0.76,1)'
					},
					'40%': {
						opacity: 1,
						'animation-timing-function': 'cubic-bezier(0.12,0.01,0.08,0.99)'
					},

					'100%': {
						opacity: 0.2
					}
				},
				'sketch-lines': {
					'0%': { 'stroke-dashoffset': 1 },
					'50%': { 'stroke-dashoffset': 0 },
					'99%': { 'stroke-dashoffset': 0 },
					'100%': { visiblity: 'hidden' }
				},
				'glow-line-horizontal': {
					'0%': { opacity: 0, transform: 'translateX(0)' },
					'5%': { opacity: 1, transform: 'translateX(0)' },
					'90%': { opacity: 1 },
					'100%': { opacity: 0, transform: 'translateX(min(60vw, 45rem))' }
				},
				'glow-line-vertical': {
					'0%': { opacity: 0, transform: 'translateY(0)' },
					'5%': { opacity: 1, transform: 'translateY(0)' },
					'90%': { opacity: 1 },
					'100%': { opacity: 0, transform: 'translateY(min(21vw, 45rem))' }
				},
				'animate-circle': {
					from: { transform: 'rotate(0deg)' },
					to: { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
				'fade-out': 'fade-out  ease forwards',
				'image-rotate': 'image-rotate 1400ms ease forwards',
				'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
				'sketch-lines': 'sketch-lines 1200ms ease-out forwards',
				'glow-line-horizontal': 'glow-line-horizontal var(--animation-duration) ease-in forwards',
				'glow-line-vertical': 'glow-line-vertical var(--animation-duration) ease-in forwards',
				spin: 'animate-circle 1000ms linear infinite'
			}
		}
	},
	plugins: []
};
