import { QueryParamsModes, QueryParamsObject } from './QueryParams.types'

export const QueryParams = <T extends QueryParamsObject>(
	queryParams?: T,
	queryParamsModes: QueryParamsModes = QueryParamsModes.QUERY
) => {
	if (!queryParams) return ''
	const stringifiedParams = Object.fromEntries(
		Object.entries(queryParams).map(([key, value]) => [key, value.toString()])
	)
	return queryParamsModes === QueryParamsModes.PARAMS
		? `/${Object.values(queryParams).map(value => value.toString())}`
		: `?${new URLSearchParams(stringifiedParams).toString()}`
}
