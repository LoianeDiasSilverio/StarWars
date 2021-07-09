import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../index.styles';

const Card = (props: any) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: 'grey', padding: 10}}>
                <Text>{props.item.title || props.item.name}</Text>
                {props.favorite && 
                    <TouchableOpacity onPress={() => props.favorite(props.item)}>
                        <View style={props.item.favoritar ? styles.ballActive : styles.ball} />
                    </TouchableOpacity>
                }
            </View>
            
        </TouchableOpacity>
    );
}

export default Card;