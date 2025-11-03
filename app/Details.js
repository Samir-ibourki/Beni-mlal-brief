import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';
import Image from './assets/WhatsApp1.jpeg'

const DetailsScreen = () => {
  return (
    
    <View style={styles.mainContainer}>
      <View style={styles.container}>
      <Image source={require('./assets/WhatsApp1.jpeg')} style={styles.image} />
        <Text style={styles.title}>À propos</Text>
        <Text>
          Ain Asserdoun est une source naturelle d'une beauté remarquable, située au cœur de Beni Mellal. Cette source historique alimente la ville depuis des siècles et constitue un lieu de détente privilégié pour les habitants et les visiteurs. Son eau cristalline et son cadre verdoyant en font un havre de paix et de fraîcheur, particulièrement apprécié durant les chaudes journées d'été.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>À propos</Text>
        <Text>
          La place du Souk est un espace animé au cœur de Beni Mellal, entouré de bâtiments traditionnels et de boutiques colorées. Ses allées accueillent des étals d’épices, de produits frais et d’artisanat, tandis que les cafés autour invitent à la pause et à l’échange. C’est un lieu vivant, reflet de l’activité quotidienne et de la culture locale.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>À propos</Text>
        <Text>
          Les Cascades d'Ouzoud sont parmi les plus hautes et les plus impressionnantes chutes d'eau d'Afrique du Nord. Avec une hauteur de 110 mètres, elles offrent un spectacle naturel magnifique. Les visiteurs peuvent admirer les arcs-en-ciel formés par la brume, observer les singes macaques dans leur habitat naturel, et se rafraîchir dans les bassins naturels au pied des cascades.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>À propos</Text>
        <Text>
          La Kasbah Ras El Ain est une forteresse historique majestueuse qui domine la ville de Beni Mellal. Construite au sommet d'une colline, elle offre une vue panoramique extraordinaire sur la ville et la plaine fertile environnante. Ce monument historique témoigne du riche patrimoine architectural de la région et constitue un excellent point de départ pour comprendre l'histoire de Beni Mellal.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
  },
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default DetailsScreen;
