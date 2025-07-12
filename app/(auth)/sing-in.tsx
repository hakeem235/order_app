import { Link, router } from 'expo-router'
import { View, Text, Alert } from 'react-native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'
const SingIn = () => {
const [isSummitting, setIsSubmitting] = useState(false);
const [form, setForm] = useState({
  email: '',
  password: '',
})

const submit = async () => {
  if(!form.email || !form.password) return Alert.alert('Erorr', 'Please enter valid email and password' )
    setIsSubmitting(true);

  try {
     // Call Appwrite Sign Function 

     Alert.alert('Success', 'User signed in successfully');
     router.replace('/');
  } catch (error: any) {
    Alert.alert('Error', error.message);
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
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
        title='Sign In'/>

        <View className='flex flex-row justify-center items-center mt-5 gap-2'>
          <Text className='base-regulat text-gray-100'>
            Don&apos;t have an account?
          </Text>
          <Link href='/sing-up' className='base-bold text-primary'>
            Sign Up
          </Link>
        </View>
    </View>
  )
}
export default SingIn