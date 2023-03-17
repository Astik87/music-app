import {type Theme, darkTheme} from '@react-native-material/core';

export const dark: Theme = {
	...darkTheme,
	palette: {
		...darkTheme.palette,
		background: {main: '#1E1E1E', on: '#ffffff'},
	}
};
