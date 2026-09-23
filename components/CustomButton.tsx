import { TouchableOpacity, Text, StyleSheet } from "react-native"

type CustomButtonProps = {
    title: string;
    onPress: () => void;
}


export default function CustomButton({title, onPress}: CustomButtonProps) {
    return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    )
}  

const styles = StyleSheet.create({
    button: {
    width: "100%",
    backgroundColor: "#7B1FA2",
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 30,
    alignItems: "center",
    marginTop: 20, 
    elevation: 4
  },
  
  buttonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#fff",
  },
})