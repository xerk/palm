import { Link, Tabs } from 'expo-router'
import { Button, useTheme } from 'tamagui'
import { CheckCheck } from '@tamagui/lucide-icons'

export default function TabLayout() {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme.borderColor.val,
        },
        headerStyle: {
          backgroundColor: theme.background.val,
          borderBottomColor: theme.borderColor.val,
        },
        headerTintColor: theme.color.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Check-in',
          tabBarIcon: ({ color }) => <CheckCheck color={color as any} />,
        }}
      />
    </Tabs>
  )
}
