import { randomUUID } from "node:crypto"

export class Awnser {
  public id: string
  public content: string

  constructor(content: string, id?: string) {
    this.content = content
    this.id = id ?? randomUUID()
  }
}