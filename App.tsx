import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>

      {/* Top container/portion of the screen */}
      <View style={styles.topContainer}>
        <Text style={styles.arrow}>←</Text>
        <Text style={styles.header}>McDonald's</Text>
        <Text style={styles.search}>🔍</Text>
      </View>

      {/* Scrolling header part. Havent gotten to it yet*/}
      <View>
        <Text>Buy 1.... Most.... Bundle...</Text>
        <Text>Get 1 Free</Text>
        <Text>Testing the text </Text>
      </View>

      {/* Main body container? (Most Popular and down)*/}
      {/* first item */}
      <Text style={styles.title}>Most Popular</Text>
      <View>
        <View style={styles.textRow}>
          <Text> 10 McNuggets Extra Value Meal [840-1190 Cals] </Text>
          <Text style={styles.priceText}>$15.79</Text>
        </View>
        <View style={styles.imageRow}>
          <Image source={{ uri: 'https://espaniapizzeria.com/wp-content/uploads/2020/05/deals-any-burger-fries-1-can-pop.png' }} style={styles.image} />

        </View>

      </View>

      {/* second item */}
      <View>
        <View style={styles.textRow}>
          <Text> 20 Chicken McNuggets (Serves 2) </Text>
          <Image source={{ uri: 'https://t3.ftcdn.net/jpg/00/91/00/98/360_F_91009860_Wmkgugg0eouXXg5JyGamobB3o0Z1OPJl.jpg' }} style={styles.image} />
        </View>
      </View>

      {/* third item */}
      <View>
        <View style={styles.textRow}>
          <Text> Quarter Puonder with Cheese Extra Value Meal </Text>
          <Image source={{ uri: 'https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit/vip/2024/10/mcdonalds-fries-inc.jpg' }} style={styles.image} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  arrow: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingRight: 30,
  },
  search:{
    fontSize: 20,
    paddingLeft: 120,
    paddingTop: 15,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20, 
  },
  image:{
    width: 120,
    height: 100,
  },
  priceText:{
    fontSize: 15,
    color: '#888',
  },

  imageRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});
