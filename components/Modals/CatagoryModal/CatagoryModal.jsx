import React, { useState, useCallback } from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";

import { useStore } from "../../../hooks";

import { modalStyles as styles } from "../../../styles";
import shortid from "shortid";
import { Icon } from "../../Icon/Icon";
import { observer } from 'mobx-react-lite';

export const CatagoryModal = observer(({ isVisible, setIsVisible }) => {

    const { catagories } = useStore();

    const onRequestClose = useCallback(
        () => setIsVisible(!isVisible),
        [isVisible]
    );

    return (
        <Modal
            style={styles.centeredView}
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={onRequestClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.back} onPress={onRequestClose}>
                            <Icon iconName="left" vectorIcon={"AntDesign"} color="black" />
                        </TouchableOpacity>
                        <View style={styles.headerMain}>
                            <Text>Счета</Text>
                        </View>
                    </View>
                    <ScrollView style={styles.body}>
                        {
                            catagories.catagoryList.map((item, index) => (
                                <View key={shortid.generate()} style={styles.itemContainer}>
                                    <TouchableOpacity
                                        style={styles.itemContainer}
                                        onPress={() => catagories.changeActiveCatagory(index)}
                                    >
                                        <View style={styles.itemIcon}>
                                            <Icon
                                                color={"white"}
                                                iconName={item.iconName}
                                                vectorIcon={item.vectorIcons}
                                            />
                                        </View>
                                        <View style={styles.itemBody}>
                                            <View>
                                                <Text style={{ color: "white" }}>{item.title}</Text>
                                            </View>
                                            <View>
                                                {catagories.activeCatagory === index ? (
                                                    <Icon
                                                        iconName="check"
                                                        color="white"
                                                        vectorIcon={"AntDesign"}
                                                    />
                                                ) : null}
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
})