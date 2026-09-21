import { View, Text, StyleSheet, Image } from 'react-native'


export default function Header() {
    return (
        <View style={styles.header}>
            <View>
            <Text style={styles.headerTitle}>Açai Prime</Text>
            <Text style={styles.headerSubtitle}>O sabor puro da Amazônia</Text>
            </View>
            
            <View style={styles.avatarPlaceholder}>
            <Image style={styles.avatarImage} source={require('../assets/user.png')} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2C1B30",
  },
  headerSubtitle: {
    fontSize: 14,
    marginTop: 4,
    color: "#644D6A",
    fontWeight: "400"
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    outlineWidth: 2,
    outlineColor:"#7B1FA2",
    borderWidth: 1,
    backgroundColor: "#7B1FA2",
    justifyContent: "center",
    alignItems: "center"
  },
  avatarImage: {
    borderRadius: 22
  },
});
