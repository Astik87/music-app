import React, {type FC, type PropsWithChildren} from 'react';
import {Box, ThemeProvider, useTheme, darkTheme} from '@react-native-material/core';
import {dark} from './themes/Dark';
import {StyleSheet} from 'react-native';

const AppThemeProvider: FC<PropsWithChildren> = ({children}) => {
	return (
		<ThemeProvider theme={dark}>
			<Box style={styles.app}>
				{children}
			</Box>
		</ThemeProvider>
	);
};

const styles = StyleSheet.create({
	app: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		backgroundColor: dark.palette.background.main,
	},
});
export default AppThemeProvider;
