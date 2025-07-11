import { router } from 'expo-router'
import { View, Text, Button } from 'react-native'
const SingIn = () => {
  return (
    <View>
      <Text>SingIn</Text>
      <Button title='Sign In' onPress={() => router.push("/sing-up")} />
    </View>
  )
}
export default SingIn