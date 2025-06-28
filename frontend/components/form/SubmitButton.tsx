import { YStack, Form, Button, Spinner } from 'tamagui'
import type { Mood } from '../../types/index'

interface SubmitButtonProps {
  status: 'off' | 'submitting' | 'submitted'
  mood: Mood | null
  onSubmit: () => void
}

export function SubmitButton({ status, mood, onSubmit }: SubmitButtonProps) {
  return (
    <YStack gap="$3">
      <Form.Trigger asChild>
        <Button
          size="$5"
          bg="$blue9"
          color="white"
          fontWeight="600"
          pressStyle={{ bg: '$blue10', scale: 0.98 }}
          hoverStyle={{ bg: '$blue8' }}
          icon={status === 'submitting' ? () => <Spinner color="white" /> : undefined}
          onPress={onSubmit}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Check-in'}
        </Button>
      </Form.Trigger>
    </YStack>
  )
} 