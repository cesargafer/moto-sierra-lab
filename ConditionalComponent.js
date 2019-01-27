import React from 'React'
import { Button, Text, View } from 'react-native';

export default class ConditionalComponent extends React.Component {
	constructor(props){
		super(props);
		this.manejarDesLoggeo = this.manejarDesLoggeo.bind(this);
		this.manejarLoggeo = this.manejarLoggeo.bind(this);
		this.state = { estaPresente: true };
	}

	manejarDesLoggeo(){
    this.setState(previousState => (
        { estaPresente: !previousState.estaPresente}
      ));
	}

	manejarLoggeo(){
		this.setState(previousState => (
		 { estaPresente: !previousState.estaPresente}
		));
	}

	render(){ // usa this.state
		const estaPresente = this.state.estaPresente;
		let botoncito;

			if (estaPresente){
				botoncito = <ButtonDesloggeo onPress={this.manejarLoggeo} />
			} else {
				botoncito = <ButtonLoggeo onPress={this.manejarDesLoggeo} />
			}
		return (
			<View>
			 <Mensaje estaPresente={estaPresente} />
			 {botoncito}
			</View>
		);
	}
}

function MensajeDesloggeo(props){
	return <Text>Entrar 💣 </Text>
}

function MensajeloggeoActivo(props){
	return <Text>Hola</Text>
}

// usa 'props' 
function Mensaje(props){
 	const estaPresente = props.estaPresente;
 
	if(estaPresente){
		return <MensajeloggeoActivo />
	}
	return <MensajeDesloggeo />
}

function ButtonDesloggeo(props){
    return (
     <Button
    onPress={props.onPress}
    title="des-loggear"
    color="#841584"
    />
    )
}


function ButtonLoggeo(props){
    return (
    <Button
    onPress={props.onPress}
    title="loggear"
    color="#841584"
    />
    )
}
