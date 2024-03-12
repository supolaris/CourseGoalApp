import React, { useState } from "react";
import {
    Text,
    View,
    ScrollView,
    FlatList,
    Pressable,
    Modal
} from "react-native";
import { HomeStyles } from "./homeScreenStyles";
import { TextInput, Button, Title } from 'react-native-paper';

export default function HomeScreen() {

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([

    ]);

    function goatInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]
        )
        modalCloseHandler()
    }

    function deleteGoalHandler(id) {
        setCourseGoals(currentCourseGoals => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        })
    }

    function modalHandler() {
        setModalIsVisible(true);
    }

    function modalCloseHandler() {
        setModalIsVisible(false);
    }


    return (
        <View style={HomeStyles.container}>

            <Button
                onPressIn={modalHandler}
                //style={HomeStyles.button}
                mode="contained"
            //onPress={() => console.log('Goal Added')}
            >
                Add New Goal
            </Button>
            {modalIsVisible &&
                <Modal
                    visible={modalIsVisible}
                    animationType="slide"
                >
                    <View style={HomeStyles.inputView}>

                        <TextInput
                            style={HomeStyles.textInput}
                            onChangeText={goatInputHandler}
                            label="Enter Goal"
                            mode="outlined"

                        />

                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
                            <Button
                                onPressIn={addGoalHandler}
                                style={HomeStyles.buttonModal}
                                mode="contained"
                                onPress={() => console.log('Goal Added')}>
                                Add Goal
                            </Button>

                            <Button
                                onPressIn={modalCloseHandler}
                                style={HomeStyles.buttonModal}
                                mode="contained"
                                onPress={() => console.log('Goal Added')}>
                                Cancel
                            </Button>
                        </View>



                    </View>


                </Modal>
            }


            <View
                style={HomeStyles.goalListMainView}
            >
                <Title
                    style={HomeStyles.goalMainitle}>Goals
                </Title>

                <FlatList style={HomeStyles.goalListView}
                    data={courseGoals}

                    renderItem={(itemData) => {
                        itemData.index
                        return (
                            <View
                                style={HomeStyles.goalView}
                            >
                                <Pressable
                                    style={({ pressed }) => pressed && HomeStyles.pressedItem}


                                    android_ripple={{ color: 'red' }}
                                    onPress={deleteGoalHandler.bind(this, itemData.item.id)}>
                                    <Text
                                        style={HomeStyles.goalText}>
                                        {itemData.item.text}</Text>
                                </Pressable>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                />
            </View>
        </View>
    )
}