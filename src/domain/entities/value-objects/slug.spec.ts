import { describe, expect, it } from "vitest"
import { Slug } from "./slug"

describe(`${Slug.name}`, () => {
  it('Should create an slug from text', () => {
    const slug = Slug.createFromText('Example title slug')

    expect(slug.value).toEqual('example-title-slug')
  })
})