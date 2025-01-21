import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native';

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
    <View>
      <Text style={styles.title}>Most Popular</Text>

        {/* first item */}
        <View style={styles.rowSeperator}>
          <View style={styles.textRow}>
            <Text>10 McNuggets Extra Value Meal [840-1190 Cals]</Text>
            <Text style={styles.priceText}>$15.79</Text>
          </View>
          <View style={styles.imageRow}>
            <Image source={{ uri: 'https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/7d180c82-8b9d-4342-ade3-62c92d9bbf07-retina-large.jpg' }} style={styles.image} />
          </View>
        </View>

        {/* second item */}
        <View style={styles.rowSeperator}>
          <View style={styles.textRow}>
            <Text> 20 Chicken McNuggets (Serves 2) [950-1160 Cals]</Text>
            <Text style={styles.priceText}>$15.19</Text>
          </View>
          <View style={styles.imageRow}>
              <Image source={{ uri: 'https://s7d1.scene7.com/is/image/mcdonalds/20240104_Product-Hero_2120_832x822px:nutrition-calculator-tile?wid=822&hei=822&dpr=off' }} style={styles.image} />
            </View>        
        </View>

      {/* third item */}
      <View style={styles.rowSeperator}>
        <View style={styles.textRow}>
          <Text> Quarter Pounder with Cheese Extra Value Meal [670-1100 Cals]</Text>
          <Text style={styles.priceText}>$14.99</Text>
        </View>
        <View style={styles.imageRow}>
          <Image source={{ uri: 'https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202201_8941_EVM_M_QuarterPounderCheese_Coke_Glass_1564x1564?wid=1000&hei=1000&dpr=off' }} style={styles.image} />
        </View>     
      </View>

      {/* fourth item */}
      <View style={styles.rowSeperator}>
        <View style={styles.textRow}>
          <Text> McChicken Extra Value Meal [620-1052 Cals]</Text>
          <Text style={styles.priceText}>$12.99</Text>
        </View>
        <View style={styles.imageRow}>
          <Image source={{ uri: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202101_0114_EVM_L_SpicyCrispyChickenSandwich_PotatoBun_832x472:product-header-desktop?wid=830&hei=456&dpr=off' }} style={styles.image} />
          </View>
        
      </View>
    </View>
  // Alert button
  <View>
    <TouchableOpacity onPress={() => {alert("Alert Button pressed");
    }}
    >
      <Text style={styles.alertText}>Alert</Text>
    </TouchableOpacity>
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
    paddingLeft: 15,
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
  image:{
    width: 120,
    height: 100,
  },
  priceText:{
    fontSize: 15,
    color: '#888',
  },  
  textRow: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 15,
    fontSize: 16,
  },  
  imageRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  rowSeperator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alertText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});
