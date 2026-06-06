import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '@/constants/colors'
import { BORDER_SIZE, FIELD_HEIGHT, FONT_SIZE, ICON_SIZE, RADIUS } from '@/constants/typography'
import { GAP, SPACING } from '@/constants/spacing'
import { GENDER } from '@/enums/generalEnums'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

// const HuddleLogo = HuddleLogoRaw as React.FC<SvgProps>;

export default function CompleteProfile() {

    const [firstName, setFistName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [gender, setGender] = useState<GENDER>(GENDER.NOT_APPLICABLE)
    const [avatar, setAvatar] = useState<string>('') // NEED BACKEND FIRST

    const handleOnboardingUser = async () => {
        // console.log({ username, email, password })
        // await registerUser({ username, email, password })
    }


    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps='never'
            >
                <LinearGradient colors={['#f8f9fa', '#e8eaf6',]} style={{ flex: 1, }}>
                    <SafeAreaView style={styles.container}>
                        <View style={styles.subContainer}>

                            {/* THIS IS THE AVATAR SECTION  */}
                            <View style={styles.topContainer}>
                                <View style={styles.languageText} >
                                    <Text style={styles.headingText}>
                                        Complete Your Profile
                                    </Text>
                                    <Text style={styles.headingSubText}>
                                        Don't worry only you can see yur personal data. No one else is able to see it.
                                    </Text>
                                    {/* <Image src='../assets/huddle-log.svg' /> */}
                                </View>
                                <View style={styles.avatarContainer} >
                                    <View style={styles.avatar}>
                                        {/* round avatar */}
                                        <FontAwesome5 name="user-alt" size={ICON_SIZE.xtraLarge} color="black" />
                                    </View>

                                    <View style={styles.pen}>
                                        <FontAwesome5 name="pencil-alt" size={ICON_SIZE.small} color={COLORS.white} />
                                    </View>

                                    
                                </View>
                            </View>
                            <View style={styles.inputContainer} >
                                <TextInput
                                    style={styles.inputFields}
                                    placeholder="Full name"
                                    autoCapitalize="none"
                                    value={firstName}
                                    onChangeText={setFistName}
                                    placeholderTextColor={COLORS.lightGray}
                                />
                                {/* <TextInput
                                    style={styles.inputFields}
                                    placeholder="Last name"
                                    autoCapitalize="none"
                                    value={lastName}
                                    onChangeText={setLastName}
                                    placeholderTextColor={COLORS.lightGray}
                                /> */}
                                <TextInput
                                    style={styles.inputFields}
                                    placeholder="Phone number"
                                    keyboardType='numeric'
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                    placeholderTextColor={COLORS.lightGray}
                                    
                                />
                                <TextInput
                                    style={styles.inputFields}
                                    placeholder="Select Gender"
                                    autoCapitalize="none"
                                    value={lastName}
                                    onChangeText={setLastName}
                                    placeholderTextColor={COLORS.lightGray}
                                />
                            </View>
                            <View style={styles.buttonContainter} >
                                <TouchableOpacity style={styles.button} onPress={handleOnboardingUser}>
                                    <Text style={styles.buttonText}>
                                        Complete
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>
                </LinearGradient>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    subContainer: {
        width: '85%',
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 80,
    },

    topContainer: {
        alignItems: 'center',
        marginBottom: SPACING.xtraLarge,
        gap: GAP.large,
    },
    headingText: {
        justifyContent: 'center',
        fontSize: FONT_SIZE.xtraLarge,
        fontWeight: 'bold',
        marginBottom: SPACING.large,
    },
    headingSubText: {
        alignItems: 'center',
        fontSize: FONT_SIZE.medium,
        fontWeight: '300',
        color: COLORS.gray,
        lineHeight: SPACING.medium,
        textAlign: 'center'
    },
    languageText: {
        alignItems: 'center',
    },

    avatarContainer: {
        alignItems: 'center',
        marginTop: SPACING.large,
        flexDirection: 'row',
        position: 'relative'
    },
    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        backgroundColor: COLORS.lightGray,
        borderRadius: '100%'
    },
    pen: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        backgroundColor: COLORS.primary,
        borderRadius: '100%',
        position: 'absolute',
        bottom: 0,
        right: 0
    },

    inputContainer: {
        gap: GAP.medium,
        marginBottom: SPACING.large,
    },

    inputFields: {
        width: '100%',
        height: FIELD_HEIGHT,
        borderRadius: RADIUS.xtraSmall,
        paddingHorizontal: SPACING.medium,
        borderWidth: BORDER_SIZE.small,
        borderColor: COLORS.border,
        backgroundColor: COLORS.white,
        fontSize: FONT_SIZE.medium,
    },

    buttonContainter: {
        marginBottom: SPACING.large,
    },

    button: {
        height: FIELD_HEIGHT,
        borderRadius: RADIUS.xtraSmall,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: COLORS.white,
        fontSize: FONT_SIZE.large,
        fontWeight: '600',
    },

    loginTextContainter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: GAP.xtraSmall,
    },

    loginText: {
        fontSize: FONT_SIZE.medium,
        color: COLORS.generalText,
    },

    loginLinkButton: {
        paddingVertical: SPACING.xtraSmall,
    },

    loginLinkButtonText: {
        fontSize: FONT_SIZE.medium,
        fontWeight: '600',
        color: COLORS.primary,
    },
});
