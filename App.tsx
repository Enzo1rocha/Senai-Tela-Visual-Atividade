import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './components/Header';
import Footer from './components/Footer';


export default function App() {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    keyboardVerticalOffset={50}
    >
      <ScrollView>
        {/* Header */}
        <Header />
        {/* Header */}


        {/* Content */}

        <View style={styles.content}>
          <View style={styles.grettingSection}>
            <Text style={styles.grettingTitle}>Refresque seu dia!</Text>
            <Text style={styles.grettingSubtitle}>Escolha seu açaí favorito de hoje</Text>
          </View>

          <View style={styles.featured}>
            <Image style={styles.image} source={require('./assets/acai-turbinado.png')}></Image>
            <View style={styles.featuredTitleContainer}>
              <Text style={styles.featuredTitle}>Açaí Turbinado 500ml</Text>
              <View style={styles.featuredWarningContainer}>
                <Text style={styles.featuredWarningText}>MAIS PEDIDO</Text>
              </View>
            </View>
            <Text style={styles.featuredDescription}>Açaí puro batido com morango, banana, leite condensado e granola crocante</Text>
            <View style={styles.featuredPriceContainer}>
              <Text style={styles.featuredPrice}>R$ 22,90</Text>
              <TouchableOpacity style={styles.featuredButton}>
                <Feather style={styles.featuredButtonIcon} name="shopping-bag" />
                <Text style={styles.featuredButtonText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Nossos Copos & Tigelas</Text>
            <View>

            </View>
          </View>

          <View>
            <Text>Qual é o seu nome?</Text>
            <TextInput></TextInput>
            <TouchableOpacity>
              <Text>Fazer meu pedido</Text>
            </TouchableOpacity>
            
          </View>

        </View>

        {/* Content */}


        {/* Footer */}
        <Footer />
        {/* Footer */}
        
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

/* cores
  Fundo: #FBF9FC
  FundoCard: #FFFFFF
  Titulos: #2C1B30
  Subtitulos: #644D6A
  Cor Footer: #6C757D

  Cor Principal: #7B1FA2
  Cor Secundaria Fundo: #F3E5F5

  Cor Fundo Aviso Ok: #E8F5E9
  Cor Titulo Aviso Ok: #2E7D32


*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FBF9FC',
    fontFamily: "Inter"
  },
  content: {
    paddingHorizontal: 24,
  },
  grettingSection: {
    marginTop:0,
    marginBottom: 24,
  },

  grettingTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2C1B30"
  },

  grettingSubtitle: {
    fontSize: 16,
    marginTop: 0,
    color: "#644D6A"
  },
   featured: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32
  },
  featuredTitleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2C1B30",
  },
  featuredWarningContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3E5F5",
    color: "#7B1FA2",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingBlock: 4,
  },

  featuredWarningText: {
    fontWeight: "700",
    fontSize: 11,
    color: "#7B1FA2",
    width: "100%",
  },

  featuredDescription: {
    fontSize: 14, 
    color: "#644D6A",
    fontWeight: '400',
    marginTop: 4,
    lineHeight: 20
  },

  featuredPriceContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingTop: 4
  },

  featuredPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#7B1FA2",
    marginTop: 12,
  },

  featuredButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
    color: "#fff",
    backgroundColor: "#7B1FA2",
    paddingHorizontal: 16,
    paddingBlock: 8,
    borderRadius: 20,
  },

  featuredButtonIcon: {
    fontWeight: "800",
    color: "#fff",
    fontSize: 14
  },

  featuredButtonText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center"
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2C1B30",
    marginBottom: 16,
  },

  image: {
    width: "100%",
    height: 180,
    marginBottom: 16,
    borderRadius: 16,
  },
});
