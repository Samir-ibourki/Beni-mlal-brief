import { Ionicons } from "@expo/vector-icons";
import { Text, View,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function listScreen() {
  
  return (
    <SafeAreaView>
      <View style={{flexDirection:'row', gap:12,alignItems:'flex-end', marginHorizontal:15, marginVertical:3 }}>
        <Ionicons name="location-sharp" size={35} color={'#378b84'} />
        <Text style={{fontSize:25,fontWeight:700,}}>Beni Mellal Guide</Text>
      </View>
      <View>
        <Image resizeMode="contain" style={{width:'100%',height:300}} source={require('../assets/banner.png')} />
      </View>

    </SafeAreaView>
  )
}