//react component

import React from 'react';
import {Text, StyleSheet} from 'react-native';
//create component
const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>This is the components screen</Text>;
};

//create a styleSheet

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    }
});

//exprt the component

export default ComponentsScreen;
