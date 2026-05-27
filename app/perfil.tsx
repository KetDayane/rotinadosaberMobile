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
  ChevronRight,
  Settings,
  ShieldCheck,
  User,
} from 'lucide-react-native';

type ProfileAction = {
  title: string;
  description: string;
  route: string;
  color: string;
  icon: typeof Settings;
};

const profileActions: ProfileAction[] = [
  {
    title: 'Configuracoes',
    description: 'Lembretes, notificacoes, idioma e aparencia.',
    route: '/configuracoes',
    color: '#b7a6f6',
    icon: Settings,
  },
  {
    title: 'Conta',
    description: 'Dados do usuario, seguranca e sessao.',
    route: '/conta',
    color: '#9bb7ff',
    icon: ShieldCheck,
  },
];

export default function Perfil() {
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
              <Text style={styles.eyebrow}>Meu espaco</Text>
              <Text style={styles.title}>Perfil</Text>
            </View>
          </View>

          <View style={styles.profileCard}>
            <View style={styles.avatar}>
              <User color="#ffffff" size={34} strokeWidth={2.4} />
            </View>
            <View style={styles.profileText}>
              <Text style={styles.profileName}>Usuario</Text>
              <Text style={styles.profileEmail}>usuario@email.com</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Opcoes do perfil</Text>
          <View style={styles.actions}>
            {profileActions.map((action) => {
              const Icon = action.icon;

              return (
                <Pressable
                  key={action.title}
                  onPress={() => router.push(action.route as never)}
                  style={({ pressed }) => [styles.actionButton, pressed && styles.pressed]}
                >
                  <View style={[styles.actionIcon, { backgroundColor: action.color }]}>
                    <Icon color="#ffffff" size={24} strokeWidth={2.4} />
                  </View>
                  <View style={styles.actionText}>
                    <Text style={styles.actionTitle}>{action.title}</Text>
                    <Text style={styles.actionDescription}>{action.description}</Text>
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
    marginBottom: 18,
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
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#eadff7',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 22,
    minHeight: 96,
    padding: 14,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: '#b7a6f6',
    borderRadius: 8,
    height: 64,
    justifyContent: 'center',
    marginRight: 14,
    width: 64,
  },
  profileText: {
    flex: 1,
  },
  profileName: {
    color: '#403456',
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: 3,
  },
  profileEmail: {
    color: '#867993',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0,
  },
  sectionTitle: {
    color: '#403456',
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: 12,
    marginTop: 2,
  },
  actions: {
    gap: 12,
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#eadff7',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 82,
    padding: 14,
  },
  actionIcon: {
    alignItems: 'center',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    marginRight: 12,
    width: 50,
  },
  actionText: {
    flex: 1,
    paddingRight: 8,
  },
  actionTitle: {
    color: '#403456',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: 3,
  },
  actionDescription: {
    color: '#867993',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },
});
