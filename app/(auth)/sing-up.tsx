import { router } from 'expo-router'
import { View, Text, Button } from 'react-native'
const SingUp = () => {
  return (
    <View>
      <Text>SingUp</Text>
      <Button title='Sign Up' onPress={() => router.push("/sing-in")} />
    </View>
  )
}
export default SingUp
