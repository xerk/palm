import { YStack, XStack, Card, H4, Button, Text } from 'tamagui'
import { Smile, Frown, Meh } from '@tamagui/lucide-icons'
import type { Mood, Moods } from '../../types/index'

interface MoodSelectionProps {
  mood: Mood | null
  onMoodChange: (mood: Mood) => void
  onErrorClear: () => void
}

const moods: Moods[] = [
  { value: 'smile', label: 'Happy', icon: Smile },
  { value: 'meh', label: 'Okay', icon: Meh },
  { value: 'frown', label: 'Sad', icon: Frown },
]

export function MoodSelection({ mood, onMoodChange, onErrorClear }: MoodSelectionProps) {
  return (
    <Card p="$4" bg="$background" borderWidth={1} borderColor="$borderColor" br="$4">
      <YStack gap="$4">
        <XStack ai="center" gap="$2">
          <H4 color="$color12">What is your mood today?</H4>
        </XStack>

        <XStack gap="$3" justifyContent="space-around">
          {moods.map((mod) => {
            const isSelected = mod.value === mood
            return (
              <YStack key={mod.value} alignItems="center" gap="$2" flex={1}>
                <Button
                  onPress={() => {
                    onMoodChange(mod.value)
                    onErrorClear()
                  }}
                  size="$6"
                  circular
                  bg={isSelected ? '$blue8' : '$background'}
                  borderColor={isSelected ? '$blue9' : '$borderColor'}
                  borderWidth={2}
                  hoverStyle={{
                    bg: isSelected ? '$blue9' : '$background',
                    scale: 1.05
                  }}
                  pressStyle={{ scale: 0.95 }}
                >
                  <mod.icon
                    color={isSelected ? 'white' : '$color11'}
                  />
                </Button>
                <Text
                  fontSize="$3"
                  fontWeight={isSelected ? '600' : '400'}
                  color={isSelected ? '$blue11' : '$color11'}
                >
                  {mod.label}
                </Text>
              </YStack>
            )
          })}
        </XStack>
      </YStack>
    </Card>
  )
} 