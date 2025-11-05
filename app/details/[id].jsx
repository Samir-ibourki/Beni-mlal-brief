import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePlacesStore } from "../../store/usePlacesStore";

export default function ListDetails() {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // Récupère l'id depuis la navigation
  const { places } = usePlacesStore();

  const place = places.find((p) => p.id === id);

  if (!place) {
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          ❌ Lieu non trouvé
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            marginTop: 15,
            backgroundColor: "#378b84",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Retour</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header avec bouton retour */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 15,
          gap: 10,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color="#378b84" />
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#333" }}>
          {place.name}
        </Text>
      </View>

      {/* Contenu défilant */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image principale */}
        {place.images?.[0] && (
          <Image
            source={{ uri: place.images[0] }}
            style={{
              width: "100%",
              height: 300,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
            resizeMode="cover"
          />
        )}

        <View style={{ padding: 15 }}>
          {/* Description */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
              color: "#222",
            }}
          >
            Description
          </Text>
          <Text style={{ fontSize: 16, lineHeight: 24, color: "#555" }}>
            {place.description}
          </Text>

          {/* Galerie d'images supplémentaires */}
          {place.images?.length > 1 && (
            <>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginTop: 20,
                  marginBottom: 10,
                  color: "#222",
                }}
              >
                Galerie
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {place.images.slice(1).map((img, index) => (
                  <Image
                    key={index}
                    source={{ uri: img }}
                    style={{
                      width: 150,
                      height: 150,
                      marginRight: 10,
                      borderRadius: 10,
                    }}
                    resizeMode="cover"
                  />
                ))}
              </ScrollView>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
