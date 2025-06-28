import { YStack, H2, Text } from 'tamagui'
import { Heart } from '@tamagui/lucide-icons'

export function CheckInHeader() {
  return (
    <YStack gap="$3" alignItems="center">
      <Heart size={32} color="pink" />
      <H2 color="$color12" fontWeight="700">
        Daily Check-in
      </H2>
      <Text color="$color11" fontSize="$4" ta="center">
        How are you feeling today?
      </Text>
    </YStack>
  )
} 