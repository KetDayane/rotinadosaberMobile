import React from 'react';
import {
  Image,
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
  BookOpenText,
  ChevronRight,
  ClipboardList,
  FileText,
  User,
} from 'lucide-react-native';
import type { Href } from 'expo-router';

type Tool = {
  title: string;
  description: string;
  route: Href;
  color: string;
  icon: typeof FileText;
};

const tools: Tool[] = [
  {
    title: 'Resumos',
    description: 'Visualize os resumos criados no web.',
    route: '/resumos',
    color: '#b7a6f6',
    icon: FileText,
  },
  {
    title: 'Cards',
    description: 'Consulte seus cards de estudo.',
    route: '/cards',
    color: '#f3aeb9',
    icon: BookOpenText,
  },
  {
    title: 'Tarefas',
    description: 'Organize sua rotina do dia.',
    route: '/tarefas',
    color: '#9bb7ff',
    icon: ClipboardList,
  },
];

export default function Inicial() {
  const router = useRouter();

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor="#f7f3ff" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View>
              <Text style={styles.eyebrow}>Rotina do Saber</Text>
              <Text style={styles.title}>Inicio</Text>
            </View>

            <Pressable
              accessibilityLabel="Abrir perfil"
              onPress={() => router.push('/perfil' as never)}
              style={({ pressed }) => [
                styles.profileButton,
                pressed && styles.pressed,
              ]}
            >
              <User color="#4b3a68" size={26} strokeWidth={2.3} />
            </Pressable>
          </View>

          <View style={styles.banner}>
            <Image
              source={require('../assets/images/bannerinicial.png')}
              resizeMode="cover"
              style={styles.bannerImage}
            />
          </View>

          <Text style={styles.sectionTitle}>Ferramentas</Text>
          <View style={styles.tools}>
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <Pressable
                  key={tool.title}
                  onPress={() => router.push(tool.route)}
                  style={({ pressed }) => [
                    styles.toolButton,
                    pressed && styles.pressed,
                  ]}
                >
                  <View style={[styles.toolIcon, { backgroundColor: tool.color }]}>
                    <Icon color="#ffffff" size={24} strokeWidth={2.4} />
                  </View>
                  <View style={styles.toolText}>
                    <Text style={styles.toolTitle}>{tool.title}</Text>
                    <Text style={styles.toolDescription}>{tool.description}</Text>
                  </View>
                  <ChevronRight color="#a398b2" size={22} strokeWidth={2.4} />
                </Pressable>
              );
            })}
          </View>

          <View style={styles.notice}>
            <Text style={styles.noticeTitle}>Area de estudos</Text>
            <Text style={styles.noticeText}>
              Resumos e cards ficam apenas para consulta no celular. A criacao continua na versao web.
            </Text>
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
    justifyContent: 'space-between',
    marginBottom: 18,
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
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 0,
    marginTop: 2,
  },
  profileButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e8dcf7',
    borderRadius: 8,
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    width: 50,
  },
  pressed: {
    opacity: 0.78,
  },
  banner: {
    backgroundColor: '#fffaff',
    borderColor: '#efe3f6',
    borderRadius: 8,
    borderWidth: 1,
    height: 150,
    marginBottom: 24,
    overflow: 'hidden',
  },
  bannerImage: {
    height: '100%',
    width: '100%',
  },
  sectionTitle: {
    color: '#403456',
    fontSize: 21,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: 12,
  },
  tools: {
    gap: 12,
    marginBottom: 22,
  },
  toolButton: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#eadff7',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    minHeight: 82,
    padding: 14,
  },
  toolIcon: {
    alignItems: 'center',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center',
    marginRight: 12,
    width: 50,
  },
  toolText: {
    flex: 1,
    paddingRight: 8,
  },
  toolTitle: {
    color: '#403456',
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: 3,
  },
  toolDescription: {
    color: '#867993',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 18,
  },
  notice: {
    backgroundColor: '#f4efff',
    borderColor: '#e2d7ff',
    borderRadius: 8,
    borderWidth: 1,
    padding: 14,
  },
  noticeTitle: {
    color: '#4b3a68',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0,
    marginBottom: 4,
  },
  noticeText: {
    color: '#7d7090',
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 19,
  },
});
