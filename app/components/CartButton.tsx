import { View, Text, TouchableOpacity, Image } from 'react-native'
import { images } from "@/constants";
const CartButton = () => {
    const totalItems = 5
  return (
    <TouchableOpacity className='cart-btn' onPress={() => {}}>
        <Image source={images.bag} className="size-5" resizeMode="contain" />
        {
            totalItems > 0 && (
                <View className="cart-badge">
                    <Text className="body-bold text-white">{totalItems}</Text>
                </View>
            )
        }
    </TouchableOpacity>
  )
}
export default CartButton