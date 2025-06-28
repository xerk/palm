import {YStack, Form, ScrollView} from "tamagui"
import {useState} from "react"
import {router} from "expo-router"
import type {Mood, FormValues} from "../../types/index"
import {api} from "../../api/api"
import {CheckInHeader} from "components/form/CheckInHeader"
import {ErrorDisplay} from "components/form/ErrorDisplay"
import {MoodSelection} from "components/form/MoodSelection"
import {EnergyLevel} from "components/form/EnergyLevel"
import {NotesSection} from "components/form/NotesSection"
import {SubmitButton} from "components/form/SubmitButton"

export default function TabOneScreen() {
  const [status, setStatus] = useState<"off" | "submitting" | "submitted">(
    "off"
  )
  const [mood, setMood] = useState<Mood | null>(null)
  const [energy, setEnergy] = useState<number>(5)
  const [note, setNote] = useState<string>("")
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = async () => {
    setStatus("submitting")
    setErrors([])
    try {
      const response = await api.checkin({mood, energy, note} as FormValues)

      router.push({
        pathname: "/results" as any,
        params: {
          message: response.data.message,
          recommendations: JSON.stringify(response.data.data),
        },
      })

      handleReset()
    } catch (error: any) {
      setErrors(error.response.data.message)
      console.error("Check-in error:", error)
      setStatus("off")
    }
  }

  const handleReset = () => {
    setStatus("off")
    setMood(null)
    setEnergy(5)
    setNote("")
    setErrors([])
  }

  return (
    <YStack flex={1} bg='$background' px='$4' py='$6'>
      <ScrollView>
        <YStack gap='$6' width='100%'>
          <CheckInHeader />

          <ErrorDisplay errors={errors} />

          <Form onSubmit={() => handleSubmit()}>
            <YStack gap='$5'>
              <MoodSelection
                mood={mood}
                onMoodChange={setMood}
                onErrorClear={() => setErrors([])}
              />

              <EnergyLevel energy={energy} onEnergyChange={setEnergy} />

              <NotesSection note={note} onNoteChange={setNote} />

              <SubmitButton
                status={status}
                mood={mood}
                onSubmit={handleSubmit}
              />
            </YStack>
          </Form>
        </YStack>
      </ScrollView>
    </YStack>
  )
}
