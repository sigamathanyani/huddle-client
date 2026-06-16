import React, { useState } from 'react'
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Svg, { Path } from 'react-native-svg'
import { LinearGradient } from 'expo-linear-gradient'
import { GAP, SPACING } from '@/constants/spacing'
import { BORDER_SIZE, FIELD_HEIGHT, FONT_SIZE, RADIUS } from '@/constants/typography'
import { COLORS } from '@/constants/colors'
import { Link } from 'expo-router'
import { useAuth } from '@/context/AuthContext'

// const HuddleLogo = HuddleLogoRaw as React.FC<SvgProps>;

export default function Register() {

    const { registerU } = useAuth()

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleRegisteringUser = () => {
        try {
            setIsLoading(true)
            registerU({ username, email, password })
        } catch (error) {
            console.error(`Something went wrong${error}`)
        } finally {
            setIsLoading(false)
        }
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
                            <View style={styles.topContainer}>
                                <View style={styles.languageText} >
                                    <Text >
                                        English (US)
                                    </Text>
                                    {/* <Image src='../assets/huddle-log.svg' /> */}
                                </View>
                                <View style={styles.logo} >
                                    <Svg width={100} height={100} viewBox='0 0 24 24' fill='none'>
                                        <Path
                                            d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'
                                            fill={'#123'}
                                        />
                                    </Svg>
                                </View>
                            </View>
                            <View style={styles.inputContainer} >
                                <TextInput
                                    style={styles.inputFields}
                                    placeholder='@huddle-handle'
                                    autoCapitalize="none"
                                    value={username}
                                    onChangeText={setUsername}
                                    placeholderTextColor={COLORS.lightGray}
                                />

                                <TextInput
                                    style={styles.inputFields}
                                    placeholder="email@email.com"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholderTextColor={COLORS.lightGray}
                                />

                                <TextInput
                                    style={styles.inputFields}
                                    placeholder="Password"
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                    placeholderTextColor={COLORS.lightGray}
                                />
                            </View>
                            <View style={styles.buttonContainter} >
                                <TouchableOpacity style={styles.button} onPress={handleRegisteringUser}>
                                    {isLoading ? <ActivityIndicator size={'small'} color={COLORS.white} /> :
                                        <Text style={styles.buttonText}>
                                            Register
                                        </Text>}
                                </TouchableOpacity>
                            </View>
                            <View style={styles.loginTextContainter} >
                                <Text style={styles.loginText}>
                                    Already have an account ?
                                </Text>
                                <TouchableOpacity style={styles.loginLinkButton}  >
                                    <Text style={styles.loginLinkButtonText}>
                                        <Link href='/(auth)/login' replace>
                                            Login
                                        </Link>
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

    languageText: {
        alignItems: 'center',
    },

    logo: {
        alignItems: 'center',
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

