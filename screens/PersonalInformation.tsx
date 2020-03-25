import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import LayoutWrapper from '../assets/LayoutWrapper'
import ConfirmationButton from '../components/ConfirmationButton'

const PersonalInformation = ({navigation}) => {
    const handleContinue = () => {
        navigation.navigate("TakeAPhotoScreen")
    }
    
    return (
        <LayoutWrapper>
            <Text>Submit a photo Screen</Text>
            <ConfirmationButton onPress={handleContinue}>Continue</ConfirmationButton>
        </LayoutWrapper>
    )
}

export default PersonalInformation

const styles = StyleSheet.create({})
