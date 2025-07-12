import { Link, router } from 'expo-router'
import { View, Text, Alert } from 'react-native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'
const SingUp = () => {
  const [isSummitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  const submit = async () => {
    if (!form.name || !form.email || !form.password) return Alert.alert('Erorr', 'Please enter valid email and password')
    setIsSubmitting(true);

    try {
      // Call Appwrite SignUP Function 

      Alert.alert('Success', 'User registered successfully');
      router.replace('/');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
      <CustomInput placeholder='Enter Your Full Name'
        label='Full Name'
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({ ...prev, name: text }))}
        secureTextEntry={false} />
      <CustomInput placeholder='Enter Your Email'
        label='Email'
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        keyboardType='email-address'
        secureTextEntry={false} />
      <CustomInput
        placeholder='Enter Your password'
        label='Password'
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
        secureTextEntry={true} />
      <CustomButton
        isLoading={isSummitting}
        onPress={submit}
        title='Sign Up' />

      <View className='flex flex-row justify-center items-center mt-5 gap-2'>
        <Text className='base-regulat text-gray-100'>
          alraedy have account? 
        </Text>
        <Link href='/sing-in' className='base-bold text-primary'>
          Sign in
        </Link>
      </View>
    </View>
  )
}
export default SingUp