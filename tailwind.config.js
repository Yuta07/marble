module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		container: {
			center: true,
		},
		colors: {
			transparent: 'var(--color-transparent)',
			primary: 'var(--color-primary)',
			secondary: 'var(--color-secondary)',
			gray: {
				lighten: 'var(--color-gray-lighten)',
				DEFAULT: 'var(--color-gray)',
				darken: 'var(--color-gray-derken)',
			},
			main: {
				lighten: 'var(--color-main-lighten)',
				DEFAULT: 'var(--color-main)',
				darken: 'var(--color-main-darken)',
			},
			error: 'var(--color-error)',
			success: 'var(--color-success)',
		},
		fontFamily: {
			sans: [
				'Helvetica Neue',
				'Helvetica, Arial',
				'Hiragino Sans',
				'ヒラギノ角ゴシック',
				'Hiragino Kaku Gothic ProN',
				'ヒラギノ角ゴ Pro W3',
				'Roboto',
				'メイリオ',
				' Meiryo',
				'ＭＳ Ｐゴシック',
				'sans-serif',
			],
		},
		borderRadius: { DEFAULT: '.5rem' },
	},
	variants: {
		extend: {},
	},
	plugins: [],
	// prefix: 'tw-',
	important: true,
}
