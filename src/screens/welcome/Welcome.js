
//=========== React Native ==========//

import React, { Component } from 'react'
import {
	View, 
	Text,
	Image,
	StyleSheet,
	StatusBar,
	ScrollView
} from 'react-native'

//======= React Native Elements =======//

import { 
	Button
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


import Carousel from 'react-native-smart-carousel';

class Welcome extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			carousel: [
				{
			    	"id": 1,
			    	"imagePath": require('../../assets/undraw/undraw_messaging_uok8.png')
			  	},
			]
		};
	}

	componentDidMount() {
       StatusBar.setHidden(true);
    }

	render() {
		return(
			<View style={styles.parentView}>
				<View style={styles.upperComponent}>
					<Carousel
						data={this.state.carousel}
						parralax={true}
						height={300}
						autoStart={true}
						playTime={1000}
						navigation={true}
						navigationColor={"#fff"}
					/>
				</View>
				<View style={styles.bottomComponent}>
					<View style={styles.buttonWrap}>
						<Button
							onPress={() => {
								this.props.navigation.navigate('Register')
							}}
							title="Create an Account"
							buttonStyle={styles.signUpButton}
							titleStyle={styles.titleSignUpButton}
						/>
						<Button
							onPress={() => {
								this.props.navigation.navigate('Login')
							}}
							title="Login"
							buttonStyle={styles.signInButton}
							titleStyle={styles.titleSignInButton}
						/>
					</View>
					
					
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	parentView: {
		flex: 1,
		backgroundColor: 'white'
	},
	upperComponent: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center'
	},
	bottomComponent: {
		flex: 1,
		marginHorizontal: 50,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	welcomeImage: {
		width: 400,
		resizeMode: 'contain'
	},
	signUpButton: {
		backgroundColor: '#f56d91',
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		paddingVertical: 10
	},
	titleSignUpButton: {
		color: 'white',
	},
	signInButton: {
		backgroundColor: 'rgba(0,0,0,0.0)',
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		borderWidth: 2,
		borderColor: '#f56d91',
		marginTop: 20
	},
	titleSignInButton: {
		color: '#f56d91',
	},
	buttonWrap: {
		width: '100%',
		marginTop: 20,
	},
})


export default Welcome;