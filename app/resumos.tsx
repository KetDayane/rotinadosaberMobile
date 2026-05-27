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
import { ArrowLeft, BookOpenText, FileText } from 'lucide-react-native';

const summaries = [
  {
    id: 1,
    title: 'Matematica basica',
    description: 'Resumo criado na plataforma web.',
  },
  {
    id: 2,
    title: 'Leitura da semana',
    description: 'Conteudo disponivel apenas para visualizar.',
  },
  {
    id: 3,
    title: 'Ciencias',
    description: 'Material salvo para revisar no aplicativo.',
  },
];

export default function Resumos() {
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
              <Text style={styles.eyebrow}>Somente leitura</Text>
              <Text style={styles.title}>Resumos</Text>
            </View>
          </View>

          <View style={styles.hero}>
            <FileText color="#ffffff" size={30} strokeWidth={2.4} />
            <Text style={styles.heroText}>Resumos feitos no web aparecem aqui para consulta.</Text>
          </View>

          <View style={styles.list}>
            {summaries.map((summary) => (
              <View key={summary.id} style={styles.item}>
                <View style={styles.itemIcon}>
                  <BookOpenText color="#ffffff" size={21} strokeWidth={2.2} />
                </View>
                <View style={styles.itemText}>
                  <Text style={styles.itemTitle}>{summary.title}</Text>
                  <Text style={styles.itemDescription}>{summary.description}</Text>
                </View>
              </View>
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
    marginBottom: 20,
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
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 0,
    marginTop: 2,
  },
  hero: {
    alignItems: 'center',
    backgroundColor: '#b7a6f6',
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 18,
    minHeight: 86,
    padding: 16,
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
  list: {
    gap: 12,
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#eadff7',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 78,
    padding: 12,
  },
  itemIcon: {
    alignItems: 'center',
    backgroundColor: '#b7a6f6',
    borderRadius: 8,
    height: 44,
    justifyContent: 'center',
    marginRight: 12,
    width: 44,
  },
  itemText: {
    flex: 1,
  },
  itemTitle: {
    color: '#403456',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: 3,
  },
  itemDescription: {
    color: '#867993',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },
});
