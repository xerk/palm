import type { FormValues } from "../types/index"
import { $http } from "./api"



export const checkin = async (values: FormValues) => {
  const response = await $http.post('/checkin', values)
  return response
}