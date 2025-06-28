export type Mood = 'smile' | 'frown' | 'meh'

export interface Moods {
  value: Mood
  label: string
  icon: React.ComponentType
}

export interface FormValues {
  mood: Mood
  energy: number
  note: string
}