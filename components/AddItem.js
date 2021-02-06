import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddItem = ({title}) => {
  return (
<View>
    <TextInput placeholder="Add Item..."
    style={styles.input} />
    <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn}><Icon name="plus" size={20}/>Add Item</Text>
    </TouchableOpacity>
</View>
  );
};
const styles = StyleSheet.create({
    AddItem: {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',   
    },
    AddItemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    AddItemText: {
      fontSize: 18,
       
    }
});
const styles = StyleSheet.create({

});

export default AddItem;