import React from 'react';
import { Button, View, Text, TextInput, Image } from 'react-native';


//Links da Page
// a comprehensive guide to JSX: https://reactjs.org/docs/jsx-in-depth.html
// React Native�s Core Components: https://reactnative.dev/docs/intro-react-native-components
// React�s useState Hook: https://reactjs.org/docs/hooks-state.html
// other kinds of Hooks in the React documentation: https://reactjs.org/docs/hooks-intro.html

//Conceitos importantes desse aprendizado
//	On Android, you usually put your views inside LinearLayout,
//	FrameLayout, RelativeLayout, etc.to define how the view�s children
//	will be arranged on the screen.In React Native, View uses Flexbox
//	for its children�s layout.You can learn more in our guide to layout
//	with Flexbox.
//See: https://reactnative.dev/docs/flexbox
//Also
//	Notice the double curly braces { { } } surrounding style�s width and
//	height.In JSX, JavaScript values are referenced with {}.This is handy
//	if you are passing something other than a string as props, like an array
//	or number: <Cat food={["fish", "kibble"]} age={2} />.However, JS objects
//	are also denoted with curly braces: { width: 200, height: 200 }.Therefore,
//	to pass a JS object in JSX, you must wrap the object in another pair of
//	curly braces: { { width: 200, height: 200 } }

//Isso � uma fun��o, fun��es s�o declaradas com a
// primeira letra sendo min�scula, diferentemente de objetos/containers
//
//                  Bem aqui est�o as props(propriedades) dessa fun��o
const getFullName = (fisrtName, secondName, thirdName) => {
	return firstName + ' ' + secondName + ' ' + thirdName;
}

//Esse component retorna valores simples
//Por�m ele � declarado com um conjunto de propriedades
// essas props podem ser declaradas como bem entender
// a partir de sua necessidade
const Cat = (props) => {
	const name = 'Maru'
	return (
		<View>
			<Text>
				Hello there, I'm ur cat! And my name is {props.name}
			</Text>
		</View>
	);
}

//Esse aqui � um component que utilizaremos as funcionalidades State
//useState � um tipo de variavel meio que boolean
//Tamb�m, veremos as funcionalidades dos Button
const HungryCat = (props) => {
	const [isHungry, setIsHungry] = useState(True)
	return (
		<View>
			<Text>
				Hey, I'm {props.name}, and I'm also ur cat but I'm {isHungry ? 'Hungry' : 'full'}!
			</Text>
			<Button
				onPress={() => {
					setIsHungry(false);
				}}
				disabled={!isHungry}
				title={isHungry ? 'Pour me some milk, plz!' : 'Tnks!'}
			/>
		</View>
		);
}

//Isso � um componente
//Nesse componente vai existir o conceito de "Brace {}"
// que significa atrelar uma vari�vel � uma sintaxe
//A vari�vel consiste num retorno de algum valor,
// que no caso pode ser direto de uma fun��o por exemplo
//Tamb�m vai existir um tipo de text diferente o TextInput
// esse � respons�vel por permitir ao user inserir dados
// dentro de seu campo. Esse campo pode possuir um valor
// e o mesmo pode ser alterado utilizando a prop defaultValue
//Ao retornar um componente para mostrar � tela ele ter� de ser
// declarado e orientado de acordo com seus semelhantes, com props
// e identa��o correspondentes
//Tamb�m podem ser inseridos no layout imagens prontas para a disposi��o
// em tela, bastando apenas referenciar seu caminho de host
const Cafe = () => {
	return (
		<>
			<Text>
				Hello there! I'm {getFullName('Alex', 'Farias', 'de Abreu Nabos')}!
			</Text>
			<View>
				<Image
					source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
					style ={{width: 200, height: 200}}
				/>
			</View>
			<Cat name='Maru' />
			<HungryCat name='Tobias' />
			<Text>
				And who're u?
			</Text>
			<TextInput
				style={{
					height: 30,
					borderColor: 'gray',
					borderWidth: 1
				}}>
				defaultValue = 'Name me!'
			</TextInput>
		</>
	);
}

export default Cafe;