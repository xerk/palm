import { YStack, Card, H4, TextArea } from 'tamagui'

interface NotesSectionProps {
  note: string
  onNoteChange: (note: string) => void
}

export function NotesSection({ note, onNoteChange }: NotesSectionProps) {
  return (
    <Card p="$4" bg="$background" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
      <YStack gap="$3">
        <H4 color="$color12">Notes</H4>
        <TextArea
          placeholder="Note anything here"
          value={note}
          onChangeText={onNoteChange}
          bg="$background"
          borderColor="$borderColor"
          fontSize="$4"
          p="$3"
        />
      </YStack>
    </Card>
  )
} 