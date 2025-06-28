import { XStack, YStack, Card, H2, H4 } from 'tamagui'
import { Button, Text, ScrollView, useTheme } from 'tamagui'
import { useLocalSearchParams, router } from 'expo-router'
import { CheckCircle, ArrowLeft, RotateCcw } from '@tamagui/lucide-icons'
import { useNavigation } from 'expo-router'
import { useLayoutEffect } from 'react'


export default function ResultsScreen() {
  const { message, recommendations } = useLocalSearchParams<{
    message: string
    recommendations: string
  }>()

  const navigation = useNavigation()
  const theme = useTheme()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  const recommendationsList = recommendations ? JSON.parse(recommendations) : []

  const handleNewCheckIn = () => {
    router.push('/(tabs)')
  }

  return (
    <YStack flex={1} bg="$background">
      <ScrollView>
        <YStack gap="$6" px="$4" py="$6">
          {/* Header */}
          <YStack gap="$4" alignItems="center">
            <CheckCircle size={64} color="$green10" />
            <H2 color="$color12" fontWeight="700" textAlign="center">
              {message || 'Check-in Successful!'}
            </H2>
            <Text color="$color11" fontSize="$4" textAlign="center">
              Here are some personalized recommendations for you today
            </Text>
          </YStack>

          {/* Recommendations */}
          <YStack gap="$4">
            <H4 color="$color12" textAlign="center">
              Recommendations for you:
            </H4>

            <YStack gap="$3">
              {recommendationsList.map((suggestion: string, index: number) => (
                <Card
                  key={index}
                  padding="$4"
                  bg="$background"
                  borderWidth={1}
                  borderColor="$borderColor"
                  borderRadius="$4"
                  hoverStyle={{ bg: '$background' }}
                >
                  <XStack gap="$3" alignItems="center">
                    <YStack
                      width={32}
                      height={32}
                      bg="$blue9"
                      borderRadius="$10"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text color="white" fontSize="$4" fontWeight="600">
                        {index + 1}
                      </Text>
                    </YStack>
                    <YStack flex={1} gap="$1">
                      <Text color="$color12" fontSize="$4" lineHeight="$2">
                        {suggestion}
                      </Text>
                    </YStack>
                  </XStack>
                </Card>
              ))}
            </YStack>
          </YStack>

          <YStack gap="$3" mt="$4">
            <Button
              size="$5"
              bg="$blue9"
              color="white"
              fontWeight="600"
              borderRadius="$4"
              onPress={handleNewCheckIn}
              icon={<RotateCcw size={20} color="white" />}
              pressStyle={{ bg: '$blue10', scale: 0.98 }}
              hoverStyle={{ bg: '$blue8' }}
            >
              Do Another Check-in
            </Button>
          </YStack>
        </YStack>
      </ScrollView>
    </YStack>
  )
} 