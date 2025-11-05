import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { usePlacesStore } from "../../store/usePlacesStore";

export default function ListScreen() {
  const router = useRouter();
  const { places, loading, error, fetchPlaces } = usePlacesStore();

  useEffect(() => {
    fetchPlaces();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        size="large"
        color="#378b84"
      />
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          ⚠️ Failed to load places
        </Text>
        <TouchableOpacity onPress={fetchPlaces}>
          <Text style={{ color: "blue", fontWeight: "bold", fontSize: 20 }}>
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          gap: 12,
          alignItems: "flex-end",
          marginHorizontal: 15,
          marginVertical: 3,
        }}
      >
        <Ionicons name="location-sharp" size={35} color={"#378b84"} />
        <Text style={{ fontSize: 25, fontWeight: 700 }}>Beni Mellal Guide</Text>
      </View>

      <Image
        resizeMode="contain"
        style={{ width: "100%", height: 300 }}
        source={require("../../assets/banner.png")}
      />

      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(`details/${item.id}`)}
            style={{
              margin: 10,
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Image
              source={{ uri: item.images[0] }}
              style={{ height: 250, borderRadius: 10, marginBottom: 8 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                marginTop: 5,
                marginBottom: 10,
                fontSize: 20,
              }}
            >
              {item.name}
            </Text>

            <Text style={{ lineHeight: 20 }}>{item.description}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}
