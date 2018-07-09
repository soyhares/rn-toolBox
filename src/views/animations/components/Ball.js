import React from 'react';
import { StyleSheet, View, Animated, Image } from 'react-native';

export default class Ball extends React.Component {

	componentWillMount() {
		this.position = new Animated.ValueXY(0, 0);
		const valueXYToMoveComponent = {
			toValue: {
				x: 200,
				y: 400
			}
		};

		Animated.spring(this.position, valueXYToMoveComponent).start() 
	}

	render() {
		return (
			<Animated.Image
			source={require('../../../../ic_launcher.png')}
			style={[this.position.getLayout(), styles.ball]} />
		
		);
	}
}

const styles = StyleSheet.create({
  ball: {
  	width: 60,
  	height: 60,
  	// borderRadius: 30,
   //  borderWidth: 30,
   //  borderColor: '#00A3EC'
  },
});
