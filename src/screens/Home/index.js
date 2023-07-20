import { FlatList, Image, StyleSheet, View } from "react-native";
import PrimeVoideoLogo from "../../assets/amazon_logo.png"
import AmazomLogo from "../../assets/prime_video.png"
import WhellOfTime from "../../assets/movies/the_wheel_of_time.png"
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from "react-native";

export const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={AmazomLogo} />
                <Image style={styles.logotipo} source={PrimeVoideoLogo} />
            </View>

            <View style={styles.navbar}>
                <TouchableOpacity>
                    <Text style={styles.navegacao}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.navegacao}>TV Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.navegacao}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.navegacao}>Kids</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.categorias}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}>
                    <Image source={WhellOfTime} />
                </TouchableOpacity>

                <Text style={styles.info}>Continue Watching</Text>
                <View>
                    <FlatList
                        data={MOVIESWATCHING}
                        keyExtractor={(item) => item.id}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => { }} style={styles.item}>
                                <Image source={item.moviesURL} />
                            </TouchableOpacity>
                        )
                        } />
                </View>

                <Text style={styles.info}>Crime Movies</Text>
                <View>
                    <FlatList
                        data={MOVIESCRIME}
                        keyExtractor={(item) => item.id}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => { }} style={styles.item}>
                                <Image source={item.moviesURL} />
                            </TouchableOpacity>
                        )
                        } />
                </View>

                <Text style={styles.info}>Watch in your language</Text>
                <View style={{ marginBottom: 50 }}>
                    <FlatList
                        data={MOVIESWATCH}
                        keyExtractor={(item) => item.id}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => { }} style={styles.item}>
                                <Image source={item.moviesURL} />
                            </TouchableOpacity>
                        )
                        } />
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232f3e',
        padding: 10
    },
    header: {
        marginTop: 30,
        marginBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
    },
    logotipo: {
        marginTop: -35,
        marginLeft: 30
    },
    navbar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 25
    },
    navegacao: {
        color: '#eee',
        fontSize: 14,
        fontWeight: '700',
    },
    info: {
        color: '#eee',
        fontSize: 18,
        fontWeight: '700',
        marginVertical: 12,
    },
    item: {
        marginHorizontal: 9,

    },
});
