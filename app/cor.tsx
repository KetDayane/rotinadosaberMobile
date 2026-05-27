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
import { ArrowLeft, Palette } from 'lucide-react-native';

const themes = [
  { name: 'Claro', color: '#f7f3ff' },
  { name: 'Azul', color: '#dcecff' },
  { name: 'Verde', color: '#dff4e6' },
  { name: 'Rosa', color: '#f8dfe9' },
];

export default function Cor() {
  const router = useRouter();
  const [theme, setTheme] = useState(themes[0].name);

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
              <Text style={styles.title}>Cor</Text>
            </View>
          </View>

          <View style={styles.hero}>
            <Palette color="#ffffff" size={28} strokeWidth={2.4} />
            <Text style={styles.heroText}>Escolha uma cor para a aparencia do aplicativo.</Text>
          </View>

          <View style={styles.colorGrid}>
            {themes.map((item) => (
              <Pressable
                key={item.name}
                onPress={() => setTheme(item.name)}
                style={({ pressed }) => [
                  styles.colorButton,
                  theme === item.name && styles.colorButtonSelected,
                  pressed && styles.pressed,
                ]}
              >
                <View style={[styles.swatch, { backgroundColor: item.color }]} />
                <Text style={styles.colorText}>{item.name}</Text>
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
    backgroundColor: '#9bb7ff',
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
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  colorButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e8dcf7',
    borderRadius: 8,
    borderWidth: 1,
    flexBasis: '47%',
    flexDirection: 'row',
    minHeight: 52,
    paddingHorizontal: 12,
  },
  colorButtonSelected: {
    borderColor: '#a999ee',
    borderWidth: 2,
  },
  swatch: {
    borderColor: '#ded3ec',
    borderRadius: 8,
    borderWidth: 1,
    height: 28,
    marginRight: 10,
    width: 28,
  },
  colorText: {
    color: '#4b3a68',
    flex: 1,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0,
  },
});
