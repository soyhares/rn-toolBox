import React from 'react';
import { View } from 'react-native';
import { Content } from 'native-base';
import Footer from '../Footer';
import Header from '../Header';

const Page = ({ children, footer, navigation }) => (
	<View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
		{navigation ? <Header navigation={navigation} /> : null}
		{children}
		{footer ? <Footer /> : null}
	</View>
);

export default Page;