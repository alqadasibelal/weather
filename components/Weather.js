import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Proptypes from 'prop-types'
import { weatherConditions } from '../utils/WeatherCondition'


const Weahter = ({ weather, temperature }) => {
    return (
        <View style={[styles.weatherContainer, { backgroundColor: weatherConditions[weather].color }]}>
            <View>
            <Text style={styles.textName}>Belal Alqadasi</Text>
            <Text style={styles.subtextName}>1619091</Text>
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.tempText}>{temperature}°</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{weatherConditions[weather].title}</Text>
                <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
            </View>
        </View>
    )
};

Weahter.Proptypes = {
    temperature: Proptypes.number.isRequired,
    weather: Proptypes.string
}


const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textName: {
        paddingTop: 43,
        fontSize: 19,
        textAlign: 'center',
        color: 'rgb(58, 0, 59)',
    },
    subtextName: {
        paddingTop: 10,
        fontSize: 19,
        textAlign: 'center',
        color: 'rgb(58, 0, 59)',
    },
    tempText: {
        fontSize: 72,
        color: '#fff'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 60,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
})
export default Weahter;