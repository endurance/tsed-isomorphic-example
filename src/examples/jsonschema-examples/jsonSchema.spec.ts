import { CollectionOf, getJsonSchema, Property } from '@tsed/schema'

import { EXAMPLEUser } from './usertype.example'

class Type2 {
  @Property()
  someNewProperty: number
}

class Type1 {
  @Property()
  someProperty: string

  @CollectionOf(Type2)
  collectionType: Type2[]
}

describe('Create a Schema', () => {
  it('Should create a complex JSON Schema', () => {
    const t1 = new EXAMPLEUser()
    console.log('User')
    console.log(JSON.stringify(getJsonSchema(t1), null, 2))
  })

  it('Should create a nested JSON Schema', () => {
    const t1 = new Type1()
    console.log('Nested')
    console.log(JSON.stringify(getJsonSchema(t1), null, 2))
  })
})
