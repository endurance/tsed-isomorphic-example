import './polyfills'
import { Property, getJsonSchema } from "@tsed/schema";

export class Type1 {
    @Property()
    someProperty!: string
}

const t1 = new Type1()

console.log('Schema for Type1', getJsonSchema(t1))
