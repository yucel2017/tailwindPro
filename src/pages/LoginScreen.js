import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-blue-500" >

      <SafeAreaView className="flex" >

        <View className='flex-row justify-start'>
          <TouchableOpacity className=" bg-red-600 p-1 rounded-3xl ml-4" activeOpacity={0.7}
          onPress={() => navigation.navigate('Welcome')} >
          <Image
              source={{
                uri: 'https://cdn.iconscout.com/icon/free/png-256/free-back-arrow-1-457733.png',
              }}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>

        <View className="flex items-center" >
          <Image className="mt-2" source={require('../assets/image/mario1.png')}
            style={{ width: 100, height: 140 }} />
        </View>

      </SafeAreaView>

      <View className="flex-1 bg-slate-100 px-8 pt-8 rounded-3xl " >

        <View style={{ gap: 10 }}>

          <Text className="text-gray-700 ml-4 " >Kullanıcı Adı</Text>
          <TextInput className="p-4 bg-gray-300 rounded-2xl" placeholder='Kullanıcı Adı Giriniz...' />

          <Text className="text-gray-700 ml-4 " >Şifre</Text>
          <TextInput className="p-4 bg-gray-300 rounded-2xl" secureTextEntry placeholder='Şifrenizi Giriniz...' />

          <TouchableOpacity className="flex items-end" activeOpacity={0.4} >
            <Text className="text-gray-700 mb-5" >Şifremi Unuttum? {'>>'}</Text>
          </TouchableOpacity >

          <TouchableOpacity className="flex items-center bg-blue-500 p-3 rounded-2xl" activeOpacity={0.7}>
            <Text className="text-2xl font-bold text-gray-900" >Giriş Yap</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-7" >
            <Text className="text-gray-400 font-semibold" >Hesabınız Yoksa?  {'>>'}  </Text>

            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} activeOpacity={0.4} >
              <Text className="font-semibold text-blue-500" >Kayıt Ol</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})