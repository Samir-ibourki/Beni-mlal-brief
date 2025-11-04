import { Ionicons } from "@expo/vector-icons";
import { Text, View,Image, TouchableOpacity, ActivityIndicator,FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";


export default function ListScreen() {
 const router = useRouter()
  let api = 'https://69086a582d902d0651b03223.mockapi.io/api/v1/places';

const [places, setPlaces] = useState([]);
const [loading,setloading] = useState(true);
const [error, setError] = useState(false);

const fetchPlaces = async()=>{
  try {
    setError(false)
    const response = await axios.get(api)
setPlaces(response.data)
  } catch (error) {
    setError(true)
  }finally{
    setloading(false)
  }
}
  useEffect(()=>{
    fetchPlaces()
  },[])

if (loading) {
 return <ActivityIndicator size="large" color="#378b84" />
}
if (error) {
  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
       <Text style={{fontWeight:'bold',fontSize:20 }}>⚠️ Failed to load places</Text>
        <TouchableOpacity onPress={fetchPlaces}>
          <Text style={{ color: 'blue',fontWeight:'bold',fontSize:20 }}>Retry</Text>
        </TouchableOpacity>
    </View>
  )
}
  return (
    <SafeAreaView>
      <View style={{flexDirection:'row', gap:12,alignItems:'flex-end', marginHorizontal:15, marginVertical:3 }}>
        <Ionicons name="location-sharp" size={35} color={'#378b84'} />
        <Text style={{fontSize:25,fontWeight:700,}}>Beni Mellal Guide</Text>
      </View>
      <View>
        <Image resizeMode="contain" style={{width:'100%',height:300}} source={require('../assets/banner.png')} />
      </View>
<View>
<FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ margin: 10, backgroundColor: '#fff', borderRadius: 10, padding: 10 }}>
          <Image source={{ uri: item.images[1] }} style={{ height: 250, borderRadius: 10,marginBottom:8 }} />
          <Text style={{ fontWeight: 'bold', marginTop: 5,marginBottom:10,fontSize:20 }}>{item.name}</Text>
          <TouchableOpacity onPress={() => router.push(`/details/${item.id}`)}>
            <Text style={{lineHeight:20}}>{item.description}</Text>
          </TouchableOpacity>
          
        </View>
      )}
    />
</View>
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 3,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: 180,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 10,
//     paddingHorizontal: 10,
//     color: '#333',
//   },
//   description: {
//     fontSize: 14,
//     color: '#666',
//     padding: 10,
//     paddingTop: 5,
//   },
//   retryBtn: {
//     backgroundColor: '#378b84ff',
//     paddingHorizontal: 30,
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   retryText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });