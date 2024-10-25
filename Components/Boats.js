import {View, Text, Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6"

const AllBoats = ({name, description, icon_name, picture}) => {
    return (
        <View>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <Icon name={icon_name} size={30} color={"grey"} style={{marginLeft: 10}}/>
                <Text style={{fontSize: 20, fontWeight: "bold", marginLeft: 10}}>
                    {name}
                </Text>
            </View>

            <Text style={{fontSize: 14, marginLeft: 10}}>
                {description}
            </Text>
            <Image source={picture} style={{width: 300, height: 200, marginLeft: 10}} />
        </View>
    );
};
export default AllBoats;
