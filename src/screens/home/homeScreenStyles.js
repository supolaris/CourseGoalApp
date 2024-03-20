import { StyleSheet } from "react-native";
import { MyAppColors } from "../../components/colors/colors";

export const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        justifyContent: 'center',
        backgroundColor: MyAppColors.peach,

    },
    inputView: {
        flex: 1,
        //flexDirection: 'row',
        alignItems: 'center', 
        borderBottomWidth: 1,
        //backgroundColor: 'red',
        justifyContent: 'center'
        
       // paddingBottom: 20
       //justifyContent: 'center',
       //alignContent: 'center'


    },
    textInput: {
        width: '80%'

    },
    buttonModal: {
        //flex: 0,
        marginHorizontal: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 3,
        backgroundColor: '#5E1675',
        

    },
    button: {
        flex: 1,
        marginLeft: 8, 
        paddingVertical: 5,
        marginTop: 3,
        backgroundColor: '#5E1675'
        

    },
    goalListMainView: {
        flex: 4,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopWidth: 1,
        marginTop: 40


    },
    goalMainitle: {
        color: '#78A083',
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10

    },
    goalListView: {
        


    },
    goalView: {
        backgroundColor: '#50727B',
        marginVertical: 4,        
        borderRadius: 10,

    },
    pressedItem: {
        opacity: 0.5,
        backgroundColor: 'orange'
    },
    goalText: {
        color: 'white',
        paddingLeft: 10,
        fontSize: 18,
        paddingBottom: 12,
        paddingVertical: 9,
        paddingHorizontal: 10,
        
    }
})