import { QueryParams, QueryParamsModes } from '../../src/helpers'
import { describe, expect, test } from 'vitest'

describe('QueryParams tests', () => {
	test('query test', () => {
		expect(
			QueryParams(
				{
					id: 1,
					code: 'code'
				},
				QueryParamsModes.QUERY
			)
		).toBe('?id=1&code=code')
	})
	test('query test', () => {
		expect(
			QueryParams(
				{
					id: 1
				},
				QueryParamsModes.PARAMS
			)
		).toBe('/1')
	})
})
