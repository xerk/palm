import { YStack, XStack, Card, Text } from 'tamagui'

interface ErrorDisplayProps {
  errors: string[]
}

export function ErrorDisplay({ errors }: ErrorDisplayProps) {
  if (errors.length === 0) return null

  return (
    <Card
      bg="$red2"
      borderColor="$red6"
      borderWidth={1}
      p="$4"
      borderRadius="$4"
    >
      <XStack gap="$3" alignItems="center" mb="$2">
        <Text color="$red11" fontSize="$5">⚠️</Text>
        <Text color="$red11" fontWeight="600">
          Something went wrong
        </Text>
      </XStack>
      <YStack gap="$1">
        {errors.map((error, index) => (
          <Text key={index} color="$red11" fontSize="$3">
            • {error}
          </Text>
        ))}
      </YStack>
    </Card>
  )
} 