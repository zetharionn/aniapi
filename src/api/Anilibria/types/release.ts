import { Names } from './names'

export interface Release {
	id: number
	code: string
	ordinal: string
	names: Names
}
