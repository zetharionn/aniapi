import { Title } from './types'

export interface IAnilibria {
	getTitle: (id: number) => Promise<Title>
	getRandomTitle: () => Promise<Title>
}
