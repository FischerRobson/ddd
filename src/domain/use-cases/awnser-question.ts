import { Awnser } from "../entities/awnser"

type AwnserQuestionProps = {
  instructorId: string
  questionId: string
  content: string
}

export class AwnserQuestion {
  do({ instructorId, questionId, content }: AwnserQuestionProps) {
    const awnser = new Awnser(content)

    return awnser
  }
}