import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Footer from '../Footer';
import Header from '../Header';

const Page = ({ children, footer, navigation }) => (
	
		<View style={{ width: '100%', height: '100%', backgroundColor: '#F0F0F0' }}>
			{navigation ? <Header navigation={navigation} /> : null}
			{children}
			{footer ? <Footer /> : null}
		</View>

);

export default Page;