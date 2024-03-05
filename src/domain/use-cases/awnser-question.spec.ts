import { describe, expect, it } from 'vitest'
import { AwnserQuestion } from './awnser-question'

describe(`${AwnserQuestion.name}`, () => {
  it('Should be able to create an awnser', () => {
    const awnserQuestion = new AwnserQuestion()
    const awnser = awnserQuestion.do({
      questionId: '1',
      instructorId: '1',
      content: 'Awnser'
    })

    expect(awnser.content).toEqual('Awnser')
  })
})