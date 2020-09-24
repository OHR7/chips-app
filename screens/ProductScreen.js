import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import CircularProgress from '../components/CircularProgress';

const ProductScreen = () => {
    return (
        <View style={{backgroundColor: 'lightgrey', flex: 1}}>
            <ImageBackground
                source={require('../assets/bg-1.png')}
                style={styles.header}
            >
            </ImageBackground>
            <View style={styles.filter}></View>
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/chip-2.png')}
                    style={styles.productImg}
                >
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 15, marginTop: 15}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 35}}>$ 4</Text>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>99</Text>
                        </View>
                    </View>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 18, margin: 15}}>Amount Per 100 grams</Text>
                </ImageBackground>
                <View style={styles.imagesContainer}>
                    <Image
                        source={require('../assets/chips-1.png')}
                        style={styles.productImgs}
                    />
                    <Image
                        source={require('../assets/chips-1.png')}
                        style={styles.productImgs}
                    />
                    <Image
                        source={require('../assets/chips-1.png')}
                        style={styles.productImgs}
                    />
                </View>
                <Text style={styles.productTitle}>TUBI Tes Chips guku flavor</Text>
                <View style={styles.imagesContainer}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>Protein</Text>
                        <CircularProgress
                            size='50'
                            strokeWidth='5'
                            text='536'
                            progressPercent='80'
                            pgColor='#1B50DB'
                            textSize='15'
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>Calories</Text>
                        <CircularProgress
                            size='50'
                            strokeWidth='5'
                            text='36'
                            progressPercent='60'
                            pgColor='#E57D2A'
                            textSize='15'
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>Sodium</Text>
                        <CircularProgress
                            size='50'
                            strokeWidth='5'
                            text='53'
                            progressPercent='50'
                            pgColor='#14B798'
                            textSize='15'
                        />
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>Vitamin C</Text>
                        <CircularProgress
                            size='50'
                            strokeWidth='5'
                            text='36'
                            progressPercent='20'
                            pgColor='purple'
                            textSize='15'
                        />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>Most traditional snak chips provide between 150 and 200 calories per serving.</Text>
                    <View style={styles.addBtn}>
                        <Text style={styles.addBtnText}>ADD CART</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
    },
    filter: {
        width: '100%',
        height: 300,
        backgroundColor: '#E57D2A',
        position: 'absolute',
        opacity: .7
    },
    container: {
        backgroundColor: 'white',
        height: Dimensions.get('window').height - 200,
        width: '100%',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        position: 'absolute',
        top: 250,
        flex: 1,
        paddingTop: 110
    },
    productImg: {
        width: Dimensions.get('window').width - 80,
        height: Dimensions.get('window').width - 80,
        position: 'absolute',
        top: -190,
        left: 40,
        justifyContent: 'space-between'
    },
    productImgs: {
        width: 80,
        height: 80
    },
    imagesContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginHorizontal: 40
    },
    productTitle: {
        fontSize: 22,
        marginHorizontal: 40,
        marginVertical: 20
    },
    footer: {
        backgroundColor: '#E57D2A',
        padding: 40,

        alignItems: 'center',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        position: 'absolute',
        bottom: 40,
        width: '100%'
    },
    addBtn: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 30,
        borderRadius: 25
    },
    addBtnText: {
        fontSize: 18,
        color: '#E57D2A',
        fontWeight: '700'
    }
})

export default ProductScreen
