import React from 'react';
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
import {
  ArrowLeft,
  Bell,
  ChevronRight,
  Languages,
  Palette,
} from 'lucide-react-native';

const settingsOptions = [
  {
    title: 'Notificacoes',
    description: 'Controle alertas, avisos e lembretes.',
    route: '/notificacoes',
    color: '#f3aeb9',
    icon: Bell,
  },
  {
    title: 'Idioma',
    description: 'Escolha o idioma do aplicativo.',
    route: '/idioma',
    color: '#b7a6f6',
    icon: Languages,
  },
  {
    title: 'Cor do aplicativo',
    description: 'Mude a aparencia do app.',
    route: '/cor',
    color: '#9bb7ff',
    icon: Palette,
  },
];

export default function Configuracoes() {
  const router = useRouter();

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
              <Text style={styles.eyebrow}>Perfil</Text>
              <Text style={styles.title}>Configuracoes</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Escolha uma opcao</Text>
          <View style={styles.options}>
            {settingsOptions.map((option) => {
              const Icon = option.icon;

              return (
                <Pressable
                  key={option.title}
                  onPress={() => router.push(option.route as never)}
                  style={({ pressed }) => [styles.optionButton, pressed && styles.pressed]}
                >
                  <View style={[styles.optionIcon, { backgroundColor: option.color }]}>
                    <Icon color="#ffffff" size={24} strokeWidth={2.4} />
                  </View>
                  <View style={styles.optionText}>
                    <Text style={styles.optionTitle}>{option.title}</Text>
                    <Text style={styles.optionDescription}>{option.description}</Text>
                  </View>
                  <ChevronRight color="#a398b2" size={22} strokeWidth={2.4} />
                </Pressable>
              );
            })}
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
  sectionTitle: {
    color: '#403456',
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: 12,
  },
  options: {
    gap: 12,
  },
  optionButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#eadff7',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 82,
    padding: 14,
  },
  optionIcon: {
    alignItems: 'center',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    marginRight: 12,
    width: 50,
  },
  optionText: {
    flex: 1,
    paddingRight: 8,
  },
  optionTitle: {
    color: '#403456',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: 3,
  },
  optionDescription: {
    color: '#867993',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },
});
