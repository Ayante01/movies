import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';

import constants from '../utils/constants';

import { DateTime } from '../../node_modules/luxon/build/cjs-browser/luxon';

import { FontAwesome } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

const imageWith =  130;
const imageMargin = imageWith + 16;

const Star = ({ realVotes }) => {
        return (
        <View style= {styles.starsContainer}>
            {[ ...Array(5).keys()].map((position) => {
              
                if( position < realVotes ){
                    return <FontAwesome name="star" size={16} color={constants.COLORS.WARNING} />;
                }else{
                    return   <FontAwesome name="star-o" size={16} color={constants.COLORS.WARNING} />;
                }
            })}
        </View>)
};

export const DetailsScreen = ({navigation, route}) => {

    const { movie } = route.params;

    return (
        <ScrollView style={styles.container}>
            <View style={ styles.imageContainer}>
                <Image
                    style={[ StyleSheet.absoluteFill ,styles.cover ]}
                    blurRadius={5}
                    source={{
                            uri: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
                        }}/>
                    <View style= {styles.backdrop}/>
            </View>
            <View style={ styles.content}>
            <Image
                style = {styles.poster}
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
                }}/>
                    <View style={{ flex:1, marginLeft: imageMargin }}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{movie.title}</Text>
                        </View>
                        <Text style={styles.popularity}>{movie.popularity.toFixed(0)}</Text>
                        <Text style={styles.release_date}>{DateTime.fromISO(movie.release_date).setLocale('es').toFormat('MMM, y')}
                        </Text>
                        <View style={{flexDirection: 'row', alignItems: 'baseline',}}>
                            <Star realVotes={Math.floor(movie.vote_average /2 )}></Star>
                            <Text style={styles.vote}>{movie.vote_average}</Text>
                        </View>
                    </View>
                    <View style={styles.secondaryContent}>
                        <Text>Resume</Text>
                        <Text style={styles.paragraph}>{movie.overview}</Text>
                    </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: constants.COLORS.LIGHT,
    },
    cover: {
        width: null,
        height: null,
        zIndex: 8,
    },
    imageContainer: {
        position: 'relative',
        width,
        height: height / 3,
    },
    backdrop: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: constants.COLORS.WARNING,
        opacity: 0.2,
        zIndex: 9,
    },
    content: {
        width,
        backgroundColor: constants.COLORS.LIGHT,
        padding: 25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        top: -25,
        zIndex: 10,
        position: 'relative',
    },
    card: {
        backgroundColor: constants.COLORS.LIGHT,
        height: 130,
        padding: 16,
        marginBottom: 8,
        borderRadius: 20,
        flexDirection: 'row',
        position: "relative",
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: constants.COLORS.TEXT_COLOR,
        fontWeight: 'bold',
        flexGrow: 1,
        flexWrap: 'wrap',
        marginRight: 8,
        fontSize: 16,
    },
    vote: {
        color: constants.COLORS.WARNING,
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 8,
    },
    popularity: {
        borderColor: constants.COLORS.PRIMARY,
        color: constants.COLORS.PRIMARY,
        borderWidth: 1,
        width: 40,
        padding: 1,
        borderRadius: 4,
        textAlign: 'center',
        marginTop: 8,
        fontWeight: '300',
        fontSize: 10,
        },
        release_date: {
            paddingTop: 8,
            fontSize: 12,
            textTransform: 'capitalize'
        },
        poster: {
            width: 130,
            height: 200,
            borderRadius: 16,
            position: "absolute",
            top: -32,
            marginBottom: 16,
        },
        starsContainer: {
            flexDirection: 'row',
        },
        secondaryContent: {
            marginTop: 55,
            marginLeft: 8,
        },
        paragraph: {
            marginTop: 8,
            fontSize: 14,
            fontWeight: 300,
            color: constants.COLORS.GRAY,
            lineHeight: 20,
        }
});