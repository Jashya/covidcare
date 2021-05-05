import { Store } from "."

export type ResourceType = "Oxygen" | "Plasma" | "Hospital" | "Medicines" | "Food"

export interface DBSchema {
  city: string
  resource: string
  verified?: {
    date: string
    time: string
  } | null
  type: ResourceType
  contact: string
}

const COLLECTION_NAME = "CovidRakshak"

export const getAllResource = async (): Promise<DBSchema[]> => {
  const data = await Store.collection(COLLECTION_NAME).get()
  return parseData(data)
}

export const getResourceByCategory = async (type: ResourceType): Promise<DBSchema[]> => {
  const data = await Store.collection(COLLECTION_NAME).where("type", "==", type).get()
  return parseData(data)
}

export const addToResource = (data: DBSchema) => {
  return Store.collection(COLLECTION_NAME).doc().set(data)
}

const parseData = (data: firebase.default.firestore.QuerySnapshot<firebase.default.firestore.DocumentData>) => {
  return data.docs.map(doc => {
    let docData = doc.data() as DBSchema
    let updatedDoc = {
      ...docData,
      verified: typeof docData.verified === "object" ? docData.verified : JSON.parse(docData.verified as any)
    }
    return updatedDoc
  })
}