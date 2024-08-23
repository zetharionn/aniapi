import type { IAnilibria } from './anilibria.types'
import {
	anilibriaRandomRelease,
	AnilibriaRandomReleaseParams
} from './methods/anilibriaRandomRelease'
import {
	anilibriaSearch,
	AnilibriaSearchParams
} from './methods/anilibriaSearch'
import {
	anilibriaRelease,
	AnilibriaReleaseParams
} from './methods/anilibriaRelease'

export class Anilibria implements IAnilibria {
	public release(params: AnilibriaReleaseParams) {
		return anilibriaRelease(params)
	}
	public randomRelease(params?: AnilibriaRandomReleaseParams) {
		return anilibriaRandomRelease(params)
	}
	public searchRelease(params: AnilibriaSearchParams) {
		return anilibriaSearch(params)
	}
}
