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
    addGoalButton: {
        borderRadius: 10,
        backgroundColor: MyAppColors.darkGreen

    },
    inputView: {
        flex: 4,
        alignItems: 'center', 
        borderBottomWidth: 1,
        backgroundColor: MyAppColors.peach
    },
    textInput: {
        width: '80%',
        marginTop: -50

    },
    buttonModal: {
        marginHorizontal: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginTop: 3,
        backgroundColor: 'green',
        

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
        color: MyAppColors.darkGreen,
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