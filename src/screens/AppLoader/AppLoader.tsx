import React, {type FC} from 'react';
import {Box, Text} from '@react-native-material/core';
import {Image, StyleSheet, View} from 'react-native';

const AppLoader: FC = () => (
	<Box style={styles.container}>
		<View style={{height: 200}}>
			<Image source={require('@/assets/preloaderLogo.png')} />
		</View>
	</Box>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageWrap: {
		height: 200,
	},
	image: {
		height: '100%',
		resizeMode: 'contain',
	},
});

export default AppLoader;
