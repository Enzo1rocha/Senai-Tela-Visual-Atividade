import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Header from './components/Header';
import Footer from './components/Footer';
import AcaiCard from './components/AcaiCard';
import { useState } from 'react';
import CustomButton from './components/CustomButton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



export default function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = () => {
    if (name.trim() === "") {
      setMessage('Por favor, informe seu nome!');
    } else {
      setMessage(`Olá, ${name}! Pedido iniciado com sucesso.`);
    }
  }

  const showResponse = () => {
    if (message.trim() !== 'Por favor, informe seu nome!') { 
      return (
        <View style={styles.messageContainerOk}> 
            <Feather style={styles.messageContainerOkIcon} name="check-circle" size={24} color="black" />
            <Text style={styles.messageOkText}>{message}</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.messageContainerBad}> 
            <MaterialIcons style={styles.messageContainerBadIcon} name="error-outline" />
            <Text style={styles.messageBadText}>{message}</Text>
        </View>
      )
    }
  }


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
            <View style={styles.sectionCardContainer}>

              <AcaiCard 
              image={require('./assets/acai-tradicional.png')}
              name='Açaí Tradicional' 
              description='Açaí cremoso com banana e granola tradicional' 
              price='R$ 14,00'
              />

              <AcaiCard 
              image={require('./assets/copo-tropical.png')}
              name='Copo Tropical' 
              description='Açaí cremoso com banana e granola tradicional' 
              price='R$ 18,50'
              />

              <AcaiCard 
              image={require('./assets/vitamina-de-acai.png')}
              name='Vitamina de Açaí' 
              description='Bebida energética batida com guaraná e aveia' 
              price='R$ 12,00'
              />

              <AcaiCard
              image={require('./assets/acai-fit-zero.png')} 
              name='Açaí Fit Zero' 
              description='Zero adição de açúcar, com chia e castanhas' 
              price='R$ 16,90'
              />

            </View>
          </View>

          <View style={styles.orderSection}>
              <Text style={styles.question}>Qual é o seu nome?</Text>
              <View style={styles.inputContainer}>
                <Feather style={styles.inputContainerIcon} name="user" />
                <TextInput
                style={styles.input}
                placeholder='Digite seu nome'
                value={name}
                onChangeText={setName}
                ></TextInput>
              </View>

              <CustomButton title='Fazer meu pedido' onPress={handleOrder}/>
              {message !== '' && (
                showResponse()
              )}
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

  sectionCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 4,
    gap: 14
  },

  orderSection: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 20
  },

  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
    width: '100%',
    backgroundColor: "#F1EDF4",
    color: '#644D6A',
    borderRadius: 16,
    paddingHorizontal: 20,
  },

  inputContainerIcon: {
    fontSize: 16,
    fontWeight: '800',
    color: '#644D6A'
  },


  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#F1EDF4",
    color: '#644D6A',
    borderRadius: 16,
    paddingEnd: 20,
    fontSize: 16,
  },

  messageContainerOk: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
    gap: 5,
    padding: 12,
    backgroundColor: '#E8F5E9',
    borderRadius: 12,
  },

  messageContainerOkIcon: {
    color: '#2E7D32',
    fontSize: 16,
  },

  messageOkText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#2E7D32',
    textAlign: 'center',
  },

  messageContainerBad: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
    gap: 5,
    padding: 12,
    backgroundColor: '#FFEBEE',
    borderRadius: 12,
  },

  messageContainerBadIcon: {
    color: '#C62828',
    fontSize: 16,
  },

  messageBadText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#C62828',
    textAlign: 'center',
  }



});
