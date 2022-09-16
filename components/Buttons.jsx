import { View, Text, Image, TouchableOpacity } from 'react-native'

import { COLORS, SIZES, SHADOWS, assets } from '../constants';

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity 
      style={{
        width: 40,
        height: 40,
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.white,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props
      }}
      onPress={handlePress}
    >
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
        }}
      />
    </TouchableOpacity>
  )
}

export const ReactButton = () => {
  return (
    <View>
      <Text>React Button</Text>
    </View>
  )
}
