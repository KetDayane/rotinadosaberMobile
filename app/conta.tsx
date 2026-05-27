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
  KeyRound,
  LogOut,
  Mail,
  ShieldCheck,
  User,
} from 'lucide-react-native';

const accountItems = [
  {
    title: 'Nome',
    description: 'Usuario',
    icon: User,
    color: '#b7a6f6',
  },
  {
    title: 'Email',
    description: 'usuario@email.com',
    icon: Mail,
    color: '#f3aeb9',
  },
  {
    title: 'Senha',
    description: 'Alterar senha da conta.',
    icon: KeyRound,
    color: '#9bb7ff',
  },
  {
    title: 'Seguranca',
    description: 'Gerenciar protecao e acesso.',
    icon: ShieldCheck,
    color: '#9ad6b2',
  },
];

export default function Conta() {
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
              <Text style={styles.title}>Conta</Text>
            </View>
          </View>

          <View style={styles.list}>
            {accountItems.map((item) => {
              const Icon = item.icon;

              return (
                <View key={item.title} style={styles.item}>
                  <View style={[styles.itemIcon, { backgroundColor: item.color }]}>
                    <Icon color="#ffffff" size={22} strokeWidth={2.3} />
                  </View>
                  <View style={styles.itemText}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                  </View>
                </View>
              );
            })}
          </View>

          <Pressable style={({ pressed }) => [styles.logoutButton, pressed && styles.pressed]}>
            <LogOut color="#ffffff" size={22} strokeWidth={2.4} />
            <Text style={styles.logoutText}>Sair da conta</Text>
          </Pressable>
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
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 0,
    marginTop: 2,
  },
  list: {
    gap: 12,
    marginBottom: 20,
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
  logoutButton: {
    alignItems: 'center',
    backgroundColor: '#e97f86',
    borderRadius: 8,
    flexDirection: 'row',
    height: 54,
    justifyContent: 'center',
  },
  logoutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0,
    marginLeft: 8,
  },
});
