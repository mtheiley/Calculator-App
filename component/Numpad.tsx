import React, {Component} from 'react'
import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native';

type MyProps = {
    title: string,
    backgroundColor: string,
    color?: string,
    onPress?: (event: GestureResponderEvent) => void,
};

type MyState = {

};

class Numpad extends Component<MyProps, MyState>
{
    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <Pressable style={({pressed}) => [
                styles.button,
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : this.props.backgroundColor,
                },
              ]} onPress={this.props.onPress}>
                <Text style={[styles.text, {color: this.props.color ? this.props.color : '#9B9B9B'}]}>{this.props.title}</Text>
            </Pressable>
        );
    }
}

const styles = StyleSheet.create({
    button: {
      height: '100%',
      width: '25%',
      borderWidth: 1,
      borderColor: '#303030',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    text: {
      color: '#9B9B9B',
      fontSize: 30,
    }
});
  

export default Numpad