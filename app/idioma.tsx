import React, { useState } from 'react';
import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowLeft, Languages } from 'lucide-react-native';

const languages = ['Portugues', 'Ingles', 'Espanhol'];

export default function Idioma() {
  const router = useRouter();
  const [language, setLanguage] = useState(languages[0]);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#f7f3ff" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Pressable
              accessibilityLabel="Voltar"
              onPress={() => router.back()}
              style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
            >
              <ArrowLeft color="#4b3a68" size={25} strokeWidth={2.4} />
            </Pressable>
            <View style={styles.headerText}>
              <Text style={styles.eyebrow}>Configuracoes</Text>
              <Text style={styles.title}>Idioma</Text>
            </View>
          </View>

          <View style={styles.hero}>
            <Languages color="#ffffff" size={28} strokeWidth={2.4} />
            <Text style={styles.heroText}>Escolha o idioma usado no aplicativo.</Text>
          </View>

          <View style={styles.optionGrid}>
            {languages.map((item) => (
              <Pressable
                key={item}
                onPress={() => setLanguage(item)}
                style={({ pressed }) => [
                  styles.optionButton,
                  language === item && styles.optionButtonSelected,
                  pressed && styles.pressed,
                ]}
              >
                <Text
                  style={[
                    styles.optionText,
                    language === item && styles.optionTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f7f3ff',
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    paddingBottom: 32,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 22,
  },
  backButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e8dcf7',
    borderRadius: 8,
    borderWidth: 1,
    height: 48,
    justifyContent: 'center',
    marginRight: 12,
    width: 48,
  },
  pressed: {
    opacity: 0.78,
  },
  headerText: {
    flex: 1,
  },
  eyebrow: {
    color: '#827497',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
  },
  title: {
    color: '#3f315f',
    fontFamily: Platform.select({
      ios: 'AvenirNext-DemiBold',
      android: 'sans-serif',
      default: 'sans-serif',
    }),
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0,
    marginTop: 2,
  },
  hero: {
    alignItems: 'center',
    backgroundColor: '#b7a6f6',
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 16,
    minHeight: 78,
    padding: 14,
  },
  heroText: {
    color: '#ffffff',
    flex: 1,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0,
    lineHeight: 21,
    marginLeft: 12,
  },
  optionGrid: {
    gap: 10,
  },
  optionButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e8dcf7',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    minHeight: 52,
    paddingHorizontal: 14,
  },
  optionButtonSelected: {
    backgroundColor: '#f0eaff',
    borderColor: '#a999ee',
  },
  optionText: {
    color: '#4b3a68',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0,
  },
  optionTextSelected: {
    color: '#4d42aa',
  },
});
