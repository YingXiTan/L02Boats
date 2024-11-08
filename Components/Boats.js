import {View, Text, Image, StyleSheet, Button} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6"
import {Colors} from "react-native/Libraries/NewAppScreen";


const styles = StyleSheet.create({
    background: {
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        margin: 10,
        marginTop: 20,
        backgroundColor: '#EFF5F3',
    },

    title: {
        flexDirection: 'row',
        flex: 1
    },

    icon: {
        size: 50,
        color: 'black',
    },

    boatName: {
        fontWeight: 'bold',
        color: Colors.black,
        fontSize: 20,
    },

    description: {
        fontSize: 15,
        marginLeft: 10,
    },

    image: {
        width: 300,
        height: 200,
        marginBottom: 15
    }
})

const AllBoats = ({name, description, icon_name, picture}) => {
    return (
            <View style={styles.background}>
                <View style={styles.title}>
                    <Icon name={icon_name} style={styles.icon} />
                    <Text style={styles.boatName}>
                        {name}
                    </Text>
                </View>

                <Text style={styles.description}>
                    {description}
                </Text>

                <Image source={picture} style={styles.image} />
            </View>
    )
};
export default AllBoats;
