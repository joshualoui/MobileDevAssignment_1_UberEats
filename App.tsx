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
      <View style={styles.navBar}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/54/54878.png' }} style={styles.listIcon} />
        <Text style={styles.navLine}></Text>
        <Text style={styles.navItem}>Buy 1,...</Text>
        <Text style={[styles.navItem, styles.currentPage]}>Most ...</Text>
        <Text style={styles.navItem}>Bundl...</Text>
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

      {/* Uber One Free Trial Tab */}
      <View style={styles.rowSeperator}>
        <View style={styles.uberOneView}>
          <TouchableOpacity style={styles.checkBox} onPress={() => {alert("Try Uber One\n5 months free")}}></TouchableOpacity>
          <Text style={styles.uberOneText}>Get <Text style={styles.uberOneSpecialText}>$0 Delivery Fee</Text> and 5% off with a free trial of Uber One</Text>
        </View>    
      </View>

    </View>
    
  {/* Alert button */}
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
    paddingTop: 40,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 15,
    paddingRight: 10,
  },
  search:{
    fontSize: 20,
    paddingLeft: 120,
    paddingTop: 15,
    marginRight: 20,
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
  navBar:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,  
    paddingTop: 30,
  },
  navItem:{
    color: 'grey',
    textAlign: 'center',
    fontWeight: '600',
    width: 120,
    paddingBottom: 15,
  },
  currentPage: {
    color: 'black',
    borderBlockColor: 'black',
    borderBottomWidth: 5,
  },
  listIcon:{
    width: 20,
    height: 20,
    marginLeft: 10,
    marginBottom: 15,
  },
  navLine:{
    borderBlockColor: '#f4f4f4',
    borderBottomWidth: 5,
    position: 'absolute',
    top: 45,
    width: 390,
  }
  uberOneText: {
    paddingRight: 160,
  },
  uberOneSpecialText: {
    color: '#daa520',
  },
  uberOneView: {
    flexDirection: 'row',
    margin: 0,
    alignItems: 'center',
  }, 
  checkBox: {
    borderColor: 'black',
    borderWidth: 2,
    height: 15,
    width: 15,
    margin: 28,
  },
});
