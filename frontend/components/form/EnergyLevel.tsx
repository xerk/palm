import { YStack, XStack, Card, H4, Slider, Text } from 'tamagui'
import { Zap } from '@tamagui/lucide-icons'

interface EnergyLevelProps {
  energy: number
  onEnergyChange: (energy: number) => void
}

const getEnergyColor = (value: number) => {
  if (value <= 3) return '$red10'
  if (value <= 6) return '$yellow10'
  return '$green10'
}

const getEnergyLabel = (value: number) => {
  if (value <= 3) return 'Low'
  if (value <= 6) return 'Moderate'
  return 'High'
}

export function EnergyLevel({ energy, onEnergyChange }: EnergyLevelProps) {
  return (
    <Card p="$4" bg="$background" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
      <YStack gap="$4">
        <XStack alignItems="center" gap="$2">
          <Zap size={20} color={getEnergyColor(energy)} />
          <H4 color="$color12">Energy Level</H4>
        </XStack>

        <YStack gap="$3">
          <Slider
            size="$4"
            width="100%"
            value={[energy]}
            max={10}
            min={1}
            step={1}
            onValueChange={(value: number[]) => onEnergyChange(value[0])}
          >
            <Slider.Track bg="$borderColor" height={8} borderRadius="$10">
              <Slider.TrackActive bg={getEnergyColor(energy)} />
            </Slider.Track>
            <Slider.Thumb
              circular
              index={0}
              size="$2"
              bg={getEnergyColor(energy)}
              borderWidth={3}
              borderColor="white"
            />
          </Slider>

          <XStack jc="space-between" ai="center" gap="$2">
            <Text fontSize="$5" fontWeight="600" color={getEnergyColor(energy)}>
              {energy}/10
            </Text>
            <Text fontSize="$4" color="$color11">
              {getEnergyLabel(energy)}
            </Text>
          </XStack>
        </YStack>
      </YStack>
    </Card>
  )
} 