import React from 'react';
import {ScrollView, Text, Image} from 'react-native';


//ScrollView � um container central utilizado para
// Scrollar imfoma��es internas inseridas em seu escopo

//vari�vel
const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    widith: 64,
    height: 64
}

const App = () => {
    <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>If u like</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Text style={{ fontSize: 96 }}>React Native</Text>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
    </ScrollView>
}

export default App;