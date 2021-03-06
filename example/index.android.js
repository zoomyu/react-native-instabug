/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import Instabug from 'react-native-instabug';

class MyProject extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit index.android.js
				</Text>
				<Text style={styles.instructions}>
					Double tap R on your keyboard to reload,{'\n'}
					Shake or press menu button for dev menu
				</Text>
				<TouchableOpacity onPress={() => this._testShowIntroMessage()}>
					<Text style={styles.welcome}>Show intro message</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this._testInstabug()}>
					<Text style={styles.welcome}>Click show me</Text>
				</TouchableOpacity>
			</View>
		);
	}

	_testShowIntroMessage() {
		Instabug.showIntroMessage();
	}

	_testInstabug() {
		Instabug.setUserEmail('your@gmail.com');
		Instabug.setUserData('This is your committed user data');
		Instabug.setUsername('Your user name');
		Instabug.addTags('react-native,bug,feedback,instabug');
		Instabug.changeLocale('CHINESE');
		Instabug.changeInvocationEvent('Shake');
		Instabug.reportBug();
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('MyProject', () => MyProject);