import React, { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  RadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';

function AppIconPlaceholder() {
  return (
    <View style={styles.iconWrap}>
      <Image
        source={require('../assets/images/oficial.png')}
        style={styles.appIcon}
        resizeMode="contain"
      />
    </View>
  );
}

function IconBackdrop() {
  return (
    <Svg width={370} height={292} viewBox="0 0 260 210">
      <Defs>
        <LinearGradient id="purplePink" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#743df4" />
          <Stop offset="1" stopColor="#ff63b5" />
        </LinearGradient>
        <LinearGradient id="yellowOrange" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#ffe857" />
          <Stop offset="1" stopColor="#ff8a32" />
        </LinearGradient>
        <LinearGradient id="pinkOrange" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#ff65ca" />
          <Stop offset="1" stopColor="#ff8c46" />
        </LinearGradient>
      </Defs>

      <Circle cx="88" cy="82" r="64" fill="url(#purplePink)" opacity="0.9" />
      <Circle cx="165" cy="76" r="58" fill="url(#yellowOrange)" opacity="0.9" />
      <Circle cx="152" cy="153" r="52" fill="url(#pinkOrange)" opacity="0.78" />
      <Circle cx="213" cy="112" r="18" fill="#3fc9f5" />
      <Circle cx="193" cy="157" r="8" fill="#ffdc45" />
      <Circle cx="124" cy="24" r="16" fill="#f95bb7" opacity="0.66" />
    </Svg>
  );
}

function ScreenBackground() {
  return (
    <Svg
      pointerEvents="none"
      style={StyleSheet.absoluteFill}
      viewBox="0 0 390 844"
      preserveAspectRatio="none"
    >
      <Defs>
        <LinearGradient id="screenBase" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#8743f4" />
          <Stop offset="0.32" stopColor="#ec4fb8" />
          <Stop offset="0.58" stopColor="#ff9b35" />
          <Stop offset="0.78" stopColor="#fff2d9" />
          <Stop offset="1" stopColor="#ffffff" />
        </LinearGradient>
        <RadialGradient id="centerMilk" cx="50%" cy="53%" r="62%">
          <Stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <Stop offset="0.45" stopColor="#ffffff" stopOpacity="0.76" />
          <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient id="bottomWhite" cx="50%" cy="83%" r="55%">
          <Stop offset="0" stopColor="#ffffff" stopOpacity="1" />
          <Stop offset="0.62" stopColor="#ffffff" stopOpacity="0.86" />
          <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient id="leftSoft" cx="0%" cy="20%" r="65%">
          <Stop offset="0" stopColor="#7b42f4" stopOpacity="0.64" />
          <Stop offset="1" stopColor="#7b42f4" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient id="rightSoft" cx="100%" cy="22%" r="70%">
          <Stop offset="0" stopColor="#ffd238" stopOpacity="0.72" />
          <Stop offset="1" stopColor="#ffd238" stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Rect width="390" height="844" fill="url(#screenBase)" />
      <Rect width="390" height="844" fill="url(#leftSoft)" />
      <Rect width="390" height="844" fill="url(#rightSoft)" />
      <Circle cx="195" cy="420" r="320" fill="url(#centerMilk)" />
      <Circle cx="195" cy="705" r="330" fill="url(#bottomWhite)" />
    </Svg>
  );
}

function FieldIcon({ type }: { type: 'email' | 'lock' | 'eye' | 'eyeOff' }) {
  const common = {
    stroke: '#7d7898',
    strokeWidth: 2.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  };

  if (type === 'email') {
    return (
      <Svg width={28} height={28} viewBox="0 0 28 28">
        <Rect x="4" y="7" width="20" height="15" rx="2.5" {...common} />
        <Path d="m5 9 9 7 9-7" {...common} />
      </Svg>
    );
  }

  if (type === 'lock') {
    return (
      <Svg width={28} height={28} viewBox="0 0 28 28">
        <Rect x="5" y="12" width="18" height="11" rx="2" {...common} />
        <Path d="M9 12V9a5 5 0 0 1 10 0v3" {...common} />
      </Svg>
    );
  }

  return (
    <Svg width={29} height={29} viewBox="0 0 28 28">
      <Path d="M3 14s4-7 11-7 11 7 11 7-4 7-11 7S3 14 3 14z" {...common} />
      <Circle cx="14" cy="14" r="3" {...common} />
      {type === 'eyeOff' ? <Path d="M4 4l20 20" {...common} /> : null}
    </Svg>
  );
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);

  function handleLogin() {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Login', 'Preencha seu email e sua senha.');
      return;
    }

    Alert.alert('Login', 'Pronto! Agora e so ligar isso a sua autenticacao.');
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <ScreenBackground />

      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.keyboardView}
        >
          <View style={styles.content}>
            <View style={styles.hero}>
              <View style={styles.iconStage}>
                <IconBackdrop />
                <AppIconPlaceholder />
              </View>
              <Text style={styles.appTitle}>Rotina do Saber</Text>
            </View>

            <View style={styles.loginArea}>
              <Text style={styles.loginTitle}>Login</Text>

              <View style={styles.inputBox}>
                <FieldIcon type="email" />
                <TextInput
                  autoCapitalize="none"
                  autoComplete="email"
                  inputMode="email"
                  keyboardType="email-address"
                  onChangeText={setEmail}
                  placeholder="Digite seu email"
                  placeholderTextColor="#aaa5bd"
                  style={styles.input}
                  value={email}
                />
              </View>

              <View style={styles.inputBox}>
                <FieldIcon type="lock" />
                <TextInput
                  autoCapitalize="none"
                  autoComplete="password"
                  onChangeText={setPassword}
                  placeholder="Digite sua senha"
                  placeholderTextColor="#aaa5bd"
                  secureTextEntry={secure}
                  style={styles.input}
                  value={password}
                />
                <Pressable
                  accessibilityLabel={secure ? 'Mostrar senha' : 'Ocultar senha'}
                  hitSlop={12}
                  onPress={() => setSecure((value) => !value)}
                  style={styles.eyeButton}
                >
                  <FieldIcon type={secure ? 'eyeOff' : 'eye'} />
                </Pressable>
              </View>

              <Pressable
                onPress={handleLogin}
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
              >
                <Svg style={StyleSheet.absoluteFill} viewBox="0 0 300 56" preserveAspectRatio="none">
                  <Defs>
                    <LinearGradient id="buttonGradient" x1="0" y1="0" x2="1" y2="0">
                      <Stop offset="0" stopColor="#8142f4" />
                      <Stop offset="0.45" stopColor="#f349b2" />
                      <Stop offset="0.72" stopColor="#ff6b55" />
                      <Stop offset="1" stopColor="#ffc21d" />
                    </LinearGradient>
                  </Defs>
                  <Rect width="300" height="56" rx="9" fill="url(#buttonGradient)" />
                </Svg>
                <Text style={styles.buttonText}>Entrar</Text>
              </Pressable>

            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  safeArea: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingBottom: 36,
    paddingTop: 18,
  },
  hero: {
    alignItems: 'center',
  },
  iconStage: {
    alignItems: 'center',
    height: 320,
    justifyContent: 'center',
    marginTop: 8,
    width: 370,
  },
  iconWrap: {
    alignItems: 'center',
    height: 430,
    justifyContent: 'center',
    position: 'absolute',
    width: 430,
  },
  appIcon: {
    height: 430,
    width: 430,
  },
  appTitle: {
    color: '#17105a',
    fontFamily: Platform.select({
      ios: 'AvenirNext-DemiBold',
      android: 'sans-serif',
      default: 'sans-serif',
    }),
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 0,
    marginTop: -18,
    textAlign: 'center',
  },
  loginArea: {
    alignItems: 'center',
    paddingBottom: 2,
    width: '100%',
  },
  loginTitle: {
    alignSelf: 'center',
    color: '#17105a',
    fontFamily: Platform.select({
      ios: 'AvenirNext-DemiBold',
      android: 'sans-serif',
      default: 'sans-serif',
    }),
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: 22,
    maxWidth: 300,
    textAlign: 'left',
    width: '100%',
  },
  inputBox: {
    alignItems: 'center',
    borderColor: '#d2cede',
    borderRadius: 9,
    borderWidth: 1.2,
    flexDirection: 'row',
    height: 56,
    marginBottom: 18,
    maxWidth: 300,
    paddingHorizontal: 17,
    width: '100%',
  },
  input: {
    color: '#171b31',
    flex: 1,
    fontSize: 17,
    letterSpacing: 0,
    marginLeft: 16,
    paddingVertical: 0,
  },
  eyeButton: {
    alignItems: 'center',
    height: 44,
    justifyContent: 'center',
    marginRight: -6,
    width: 44,
  },
  button: {
    alignItems: 'center',
    borderRadius: 9,
    height: 56,
    justifyContent: 'center',
    marginTop: 6,
    maxWidth: 300,
    overflow: 'hidden',
    width: '100%',
  },
  buttonPressed: {
    opacity: 0.86,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: 0,
  },
});
