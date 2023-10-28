import { Text, TouchableOpacityProps, TextStyle, ViewStyle, StyleSheet, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

interface IButtonProps extends TouchableOpacityProps {
    title: string;
    buttonStyle?: ViewStyle;
    titleStyle?: TextStyle;
    IconName?: string
}


const Button = (props: IButtonProps) => {
    return (
        <TouchableOpacity style={[styles.button, props.buttonStyle]}>
            <View style={styles.titleAndIconView}>
                <Ionicons name='add' color={"#FFFEFF"} size={20} />
                <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
            </View>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25,
        backgroundColor: '#6BD1E7',
    },
    title: {
        fontSize: 20,
        color: '#FFFEFF',
        fontWeight: "500"
    },
    titleAndIconView:{flexDirection:"row",alignItems:"center"}
});

export default Button