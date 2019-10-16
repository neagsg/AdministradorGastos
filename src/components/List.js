import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function List({data}){
	return(
		<View style={styles.container}>
			<View style={styles.titleButton}>
				<Text style={styles.title}>{data.title}</Text>
				<TouchableOpacity onPress={() => alert('Press')}>
					<Icon name='trash' size={25} color='#555'/>
				</TouchableOpacity>
			</View>
			<Text style={styles.description} numberOfLines={3}>{data.description}</Text>
			<View style={styles.valueView}>
				<Text style={styles.value}>{data.value}</Text>
			</View>
			<View style={styles.dateStatus}>
				<Text style={styles.date}>{data.date}</Text>
				<Text style={styles.status}>{data.status}</Text>
			</View>
		</View>
		)

}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		marginTop: 20,
		marginHorizontal: 10,
		borderRadius: 5,
		padding: 10,
	},
	
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#666',

	},

	description: {
		fontSize: 15,
		fontWeight: '500',
		color: '#777',
		marginVertical: 3,
	},

	date: {
		fontSize: 15,
		fontWeight: '500',
		color: '#777'

	},

	value: {
		fontSize: 15,
		fontWeight: '600',
		color: '#777',


	},

	status: {
		fontSize: 15,
		fontWeight: '700',
		color: '#0a0'

	},

	titleButton: {
		flexDirection: 'row',
		marginTop: 6,
		marginHorizontal: 5,
		justifyContent: 'space-between',
	},

	dateStatus: {
		flexDirection: 'row',
		marginTop: 6,
		marginHorizontal: 5,
		justifyContent: 'space-between',
	},

	valueView: {
		marginHorizontal: 5,
		alignItems: 'flex-end',
	}
})