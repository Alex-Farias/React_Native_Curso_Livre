import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';


//Link da Page
// React docs on controlled components: https://reactjs.org/docs/forms.html#controlled-components
// learn how to handle touches: https://reactnative.dev/docs/handling-touches
const PizzaTranslator = () => {
    const [text, setText] = useState('');
    return (
        <View style={{padding: 10}}>
            <TextInput
                style={{height: 40}}
                placeholder='Type here to translate!'
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Text
                style={{padding : 60,
                        fontSize: 42}}
            >
                {text.split(' ').map((word) => word && '🍕').join(' ')}

            </Text>
        </View>
    )
}

export default PizzaTranslator;