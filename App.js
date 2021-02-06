import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, FlatList  } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'YONG' },
    {id: uuidv4(), text: 'SE' },
    {id: uuidv4(), text: 'JUN' },
    {id: uuidv4(), text: 'JAY' }
  ])

const  deleteItem = (id) => {
  setItems(prevItems => {
    return prevItems.filter(item => item.id != id);
  })
}

  return(
    <View style={styles.container}>
      <Header/>
      <AddItem/>
      <FlatList 
      data={items} 
      renderItem={({item}) => (
      <ListItem item={item} deleteItem={deleteItem}/>  
      )}
    /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ 
    flex: 1,
    paddingTop : 60
  },
});

export default App;