import React from 'react';
import AppRouter from './src/components/AppRouter';
import AppThemeProvider from './src/components/AppThemeProvider';

export default function App() {
	return (
		<AppThemeProvider>
			<AppRouter />
		</AppThemeProvider>
	);
}
