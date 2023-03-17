declare module '@mui/material/styles' {
	type Theme = {
		status: {
			danger: string;
		};
	};
	// Allow configuration using `createTheme`
	type ThemeOptions = {
		status?: {
			danger?: string;
		};
	};
}
