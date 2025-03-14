import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/f8.png')}
          style={styles.headLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Fast and Furious 8</ThemedText>
        <ThemedText>2017 | 2h15 | Action</ThemedText>
        <ThemedView style={styles.PopCornContainer}>
          {[...Array(5)].map((_, index) => (
          <Image
            key={`popcorn-${index}`}
            source={require('@/assets/images/Logo_PopCorn2.png')}
            style={[
              styles.PopCornLogo,
              index === 4 && { opacity: 0.3 },
            ]}
          />
          ))}
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.bodyContainer}>
        <ThemedText style={styles.description}>
          Dom et Letty en lune de miel, Brian et Mia rangés et le reste de l’équipe disculpé, la bande retrouve un semblant de vie normale. C’est le moment que choisit Cypher, une cyberterroriste, pour forcer Dom à la rejoindre et trahir les siens.
        </ThemedText>

        <ThemedView style={styles.container}>
          <ThemedText style={styles.Titles}>
            Distribution
          </ThemedText>
          <ThemedText>
            Vin Diesel, Dwayne Johnson, Jason Statham, Charlize Theron
          </ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.container}>
          <ThemedText style={styles.Titles}>
            Réalisation
          </ThemedText>
          <ThemedText>
           F. Gary Gray
          </ThemedText>
        </ThemedView>

      </ThemedView>
        

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  infosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PopCornContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  PopCornLogo: {
    height: 40,
    width: 40,
  },
  bodyContainer: {
    marginTop: 20,
    gap: 15,
    textAlign: 'left',
  },
  description: {
    marginVertical: 20,
  },
  container: {
    gap: 5,
  },
  Titles: {
    color: 'gray',
    fontSize: 18,
  },
});
