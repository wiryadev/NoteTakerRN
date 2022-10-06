import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './TextArea.component.style';

class TextArea extends Component {
    state = {
        text: ""
    }

    render() {
        const { ...extraProps } = this.props
        return (
            <TextInput
                {...extraProps}
                style={[styles.textArea, extraProps.style]}
                multiline={true}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        )
    }
}


export default TextArea