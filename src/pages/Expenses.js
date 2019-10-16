import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'
import List from '../components/List'

function Expenses(props) {
  return (
    <View style={styles.container}>
      <LinearGradient style={{flex: 1}} colors={['#7159c1', '#9b49c1']}
          start={{ x:0, y:0 }}
          end={{ x:1, y:1 }}>

          <View style={styles.header}>
          
            <Text style={styles.title}>MEUS GASTOS</Text>

            <TouchableOpacity style={styles.btnAdd}
                    onPress={() => props.navigation.navigate('AddExpenses')}>
              <Icon name='add' size={35} color='#fff' />
            </TouchableOpacity>

          </View>

          
          <FlatList style={styles.list}
              data={[

                {
                  id: Math.random(),
                  title: 'Banco',
                  description: 'Pagar boleto da faculdade',
                  date: '05/11/2019',
                  value: 'R$450,00',
                  status: 'Pendente'
                },{
                  id: Math.random(),
                  title: 'Conta de luz',
                  description: 'Pagar convênio',
                  date: '01/11/2019',
                  value: 'R$150,00',
                  status: 'Pendente'
                },{
                  id: Math.random(),
                  title: 'Internet',
                  description: 'Pagar boleto de internet',
                  date: '05/11/2019',
                  value: 'R$200,00',
                  status: 'Pendente'
                },{
                  id: Math.random(),
                  title: 'Internet',
                  description: 'Pagar boleto de internet',
                  date: '05/11/2019',
                  value: 'R$200,00',
                  status: 'Pendente'
                },{
                  id: Math.random(),
                  title: 'Internet',
                  description: 'Pagar boleto de internet',
                  date: '05/11/2019',
                  value: 'R$200,00',
                  status: 'Pendente'
                },

              
              ]}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              
              <List data={item}/>

            )}
                />


            

        
      </LinearGradient>
    </View>
  );
};

// #7159c1 #9b49c1
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    paddingLeft: 20,
    fontSize: 25,
    color: '#fff',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
    marginHorizontal: 20,
  },

  btnAdd: {
    padding: 8,
    backgroundColor: '#6bd4c1',
    borderRadius: 25,

  },

  list: {
    marginBottom: 20,
  }
});

export default Expenses
