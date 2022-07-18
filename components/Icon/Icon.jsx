import React from 'react'
import { AntDesign, Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

export const Icon = ({ iconName, vectorIcon, color, size }) => {
    switch(vectorIcon) {
        case 'AntDesign':
            return <AntDesign name={iconName} size={size ? size : 18} color={color} />
        case 'Ionicons':
            return <Ionicons name={iconName} size={size ? size : 18} color={color} />
        case 'MaterialIcons':
            return <MaterialIcons name={iconName} size={size ? size : 18} color={color} />
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={iconName} size={size ? size : 18} color={color} />
        case 'FontAwesome':
            return <FontAwesome name={iconName} size={size ? size : 18} color={color} />
        default:
            return <AntDesign name="check" size={size ? size : 18} color={'white'} />
    }
}