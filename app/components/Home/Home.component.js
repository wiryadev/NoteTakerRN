import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TextArea from '../TextArea/TextArea.component';
import styles from './Home.component.style';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Please enter your note here</Text>
                <TextArea />
            </View>
        )
    }
}

export default Home