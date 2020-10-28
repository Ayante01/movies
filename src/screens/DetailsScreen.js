import React from 'react'
import { View, Text } from 'react-native'

export const DetailsScreen = ({navigation, route}) => {

    const { movie } = route.params;

    return (
        <View>
            <Text>{movie.title}</Text>
        </View>
    );
};
