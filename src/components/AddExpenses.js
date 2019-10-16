import React from 'react'
import { 
	View,
	Text,
	Button,
	StyleSheet,
	TouchableOpacity,
	TextInput } from 'react-native'
	import LinearGradient from 'react-native-linear-gradient'

export default function AddExpenses(props){
	return(
		<View style={styles.container}>
			<LinearGradient style={{flex: 1}} colors={['#7159c1', '#9b49c1']}
	          start={{ x:0, y:0 }}
	          end={{ x:1, y:1 }}>
	          <View style={styles.textInput}>
					<View style={styles.headerText}>
						<Text style={styles.text}>Título</Text>
						<TextInput style={styles.input}
							placeholder='Título...'

						/>
					</View>
					<View style={styles.headerText}>
						<Text style={styles.text}>Descrição</Text>
						<TextInput style={styles.input}
							placeholder='Descrição...'

						/>
					</View>
				</View>
				<View style={styles.buttonsText}>
					<TouchableOpacity style={styles.button}
						onPress={() => props.navigation.navigate('Expenses')}>
						<Text style={styles.text}>Voltar</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button}
						onPress={() => alert('Salvo')}>
						<Text style={styles.text}>Salvar</Text>
					</TouchableOpacity>
				</View>
			</LinearGradient>

		</View>
		)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	textInput: {
		marginTop: 50,
		marginLeft: 20,

	},

	headerText: {
		marginTop: 20,

	},

	text: {
		fontSize: 18,
		fontWeight: '700',
		color: '#fff',

	},

	input: {
		marginRight: 20,
		marginTop: 10,
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 15,

	},

	buttonsText: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 20,




	},

	button: {
		backgroundColor: '#6bd4c1',
		paddingVertical: 10,
		paddingHorizontal: 28,
		borderRadius: 6,
		marginRight: 20,
	},
})