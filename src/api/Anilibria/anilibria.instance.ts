import type { IAnilibria } from './anilibria.types'
import {
	anilibriaRandom,
	AnilibriaRandomParams
} from './methods/anilibriaRandom'
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
	public randomRelease(params?: AnilibriaRandomParams) {
		return anilibriaRandom(params)
	}
	public searchRelease(params: AnilibriaSearchParams) {
		return anilibriaSearch(params)
	}
}
