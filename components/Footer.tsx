import { Text, View, StyleSheet } from 'react-native';


export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Açai Prime • O sabor autêntico da Amazônia</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        marginBlock: 40,
        alignItems: 'center',

    },
    footerText: {
        fontFamily: "Inter",
        fontSize: 14,
        fontWeight: '500',
        color: '#9b9b9b'
    },
})