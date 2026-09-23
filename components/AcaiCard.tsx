import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ImageSourcePropType } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';


type AcaiCardProps = {
    image: ImageSourcePropType
    name: string;
    description: string;
    price: string;
}

export default function CoffeCard({image, name, description, price}: AcaiCardProps) {
    return(
        <View style={styles.sectionCard}>
            <Image style={styles.sectionImage} source={image} />
            <Text style={styles.sectionCardTitle}>{name}</Text>
            <Text style={styles.sectionCardDescription}>{description}</Text>
            <View style={styles.sectionCardPriceContainer}>
                <Text style={styles.sectionCardPrice}>{price}</Text>
                <TouchableOpacity style={styles.sectionCardPriceIconButton}>
                    <FontAwesome style={styles.sectionCardPriceIcon} name="plus" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionCard: {
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 16,
        shadowColor: "#2C1B300F",
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.05,
        elevation: 4,
        width: "48%"
    },
    
    sectionImage: {
        width: "100%",
        marginBottom: 16,
        borderRadius: 8,
    },

    sectionCardTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#2C1B30",
    },

    sectionCardDescription: {
        fontSize: 12, 
        color: "#644D6A",
        marginTop: 4
    },

    sectionCardPriceContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },

    sectionCardPriceIconButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7B1FA2',
        borderRadius: 14,
        height: 28,
        width: 28,

    },

    sectionCardPriceIcon: {
        height: 12,
        color: "#fff",
        textAlign: 'center'
    },

    sectionCardPrice: {
        fontSize: 14,
        fontWeight: "900",
        color: "#7B1FA2",
        textAlign: 'center'
    },

})