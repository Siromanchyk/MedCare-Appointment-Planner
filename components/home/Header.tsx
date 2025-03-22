import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function Header() {
  return (
    <View style={{ backgroundColor: '#0096FF', paddingHorizontal: 15, paddingBottom: 30 }}>
      <View style={styles.innerContainer}>
        <View style={styles.block}>
          <Text style={{ color: 'white', fontFamily: 'RobotoRegular' }}>INMED+</Text>
        </View>
        <View style={{ width: 50, height: '100%' }}>
          <Image source={require('../../assets/images/empty-avatar.jpg')} style={{ width: 40, height: '100%' }} />
        </View>
      </View>
      <View>
        <Text style={{ color: 'white', fontSize: 22, fontFamily: 'RobotoRegular', marginTop: 12, fontWeight: 500 }}>Hi, Briska</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 6 }}>
        <View style={{ width: '50%' }}>
          <Text style={{ fontFamily: 'RobotoRegular', fontWeight: 200, color: 'white' }}>
            Do you have any health complaints?
          </Text>
        </View>
        <View style={{ width: '50%', paddingVertical: 10, backgroundColor: '#00FFFF' }}>
          <Link href="/_sitemap" style={{ fontFamily: 'RobotoRegular', color: 'white', textAlign: 'center' }}>Let's Consult</Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  block: {
    backgroundColor: '#3E8EDE',
    padding: 10,
    borderRadius: 5,
  },
})