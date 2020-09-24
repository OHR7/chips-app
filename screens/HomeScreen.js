import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'


const HomeScreen = props => {
    return (
        <View style={{backgroundColor: 'lightgrey', flex: 1}}>
            <ImageBackground
                source={require('../assets/bg-1.png')}
                style={styles.header}
            >
            </ImageBackground>
            <View style={styles.filter}></View>
            <View style={styles.headerText}>
                <Text style={styles.headerTitle}>TUBI Tes Chips</Text>
                <Text style={styles.headerDescription}>Most traditional snak chips provide between 150 and 200 calories per serving.</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.containerTitle}>Buy now</Text>
            
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{marginBottom: 50}}
            >
                <View style={styles.productContainer}>
                    <Image
                        source={require('../assets/chip-1.png')}
                        style={styles.productImg}
                    />
                    <View style={styles.productDescriptionContainer}>
                        <View style={styles.productDescriptionTitleContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 35}}>$ 4</Text>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>99</Text>
                            </View>
                            <View style={styles.addBtn}>
                                <Text style={styles.addBtnText}>Add to cart</Text>
                            </View>
                        </View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>TUBI Tes Chips gulu flavor</Text>
                        <View style={styles.productDescriptionFooter}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 7}}>TUBI Tes Chips gulu flavor</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 20}}>
                                <View style={styles.controlBtn}>
                                    <FontAwesome
                                        name='minus'
                                        color='#1B50DB'
                                        size={12}
                                    />
                                </View>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12, marginHorizontal: 3}}>01</Text>
                                <View style={styles.controlBtn}>
                                    <FontAwesome
                                        name='minus'
                                        color='#1B50DB'
                                        size={12}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.productContainer}
                    onPress={() => {
                        props.navigation.navigate({name: 'Product'})
                    }}
                >
                    <Image
                        source={require('../assets/chip-2.png')}
                        style={styles.productImg}
                    />
                    <View style={styles.productDescriptionContainer2}>
                        <View style={styles.productDescriptionTitleContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 35}}>$ 4</Text>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>99</Text>
                            </View>
                            <View style={styles.addBtn}>
                                <Text style={styles.addBtnText}>Add to cart</Text>
                            </View>
                        </View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>TUBI Tes Chips gulu flavor</Text>
                        <View style={styles.productDescriptionFooter}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 7}}>TUBI Tes Chips gulu flavor</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 20}}>
                                <View style={styles.controlBtn}>
                                    <FontAwesome
                                        name='minus'
                                        color='#E57D2A'
                                        size={12}
                                    />
                                </View>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12, marginHorizontal: 3}}>01</Text>
                                <View style={styles.controlBtn}>
                                    <FontAwesome
                                        name='minus'
                                        color='#E57D2A'
                                        size={12}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.productContainer}>
                    <Image
                        source={require('../assets/chip-3.png')}
                        style={styles.productImg}
                    />
                    <View style={styles.productDescriptionContainer3}>
                        <View style={styles.productDescriptionTitleContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 35}}>$ 4</Text>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>99</Text>
                            </View>
                            <View style={styles.addBtn}>
                                <Text style={styles.addBtnText}>Add to cart</Text>
                            </View>
                        </View>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>TUBI Tes Chips gulu flavor</Text>
                        <View style={styles.productDescriptionFooter}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 7}}>TUBI Tes Chips gulu flavor</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 20}}>
                                <View style={styles.controlBtn}>
                                    <FontAwesome
                                        name='minus'
                                        color='#14B798'
                                        size={12}
                                    />
                                </View>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12, marginHorizontal: 3}}>01</Text>
                                <View style={styles.controlBtn}>
                                    <FontAwesome
                                        name='minus'
                                        color='#14B798'
                                        size={12}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 300,
    },
    headerText: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        position: 'absolute',
    },
    filter: {
        width: '100%',
        height: 300,
        backgroundColor: '#1B50DB',
        position: 'absolute',
        opacity: .7
    },
    headerTitle: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20
    },
    headerDescription: {
        fontSize: 18,
        color: 'white',
        marginLeft: 20,
        marginRight: 50
    },
    container: {
        backgroundColor: 'white',
        height: Dimensions.get('window').height - 200,
        width: '100%',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        position: 'absolute',
        top: 250,
        flex: 1
    },
    containerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 10,
        color: '#44488F'
    },
    productContainer: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20
    },
    productImg: {
        width: 150,
        height: 150,
    },
    productDescriptionContainer: {
        backgroundColor: '#1B50DB',
        marginLeft: -3,
        padding: 10,
        paddingVertical: 15
    },
    productDescriptionContainer2: {
        backgroundColor: '#E57D2A',
        marginLeft: -3,
        padding: 10,
        paddingVertical: 15
    },
    productDescriptionContainer3: {
        backgroundColor: '#14B798',
        marginLeft: -3,
        padding: 10,
        paddingVertical: 15
    },
    productDescriptionTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addBtn: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15
    },
    addBtnText: {
        color: '#1B50DB',
        fontWeight: 'bold',
        fontSize: 10
    },
    productDescriptionFooter: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    controlBtn: {
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 3
    }
})

export default HomeScreen
