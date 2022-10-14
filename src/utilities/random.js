import { faker } from '@faker-js/faker'

class Random {
	calcRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min)) + min
	}

	calcRandomNumbers = (num) => {
		let i,
			numList = {}
		for (i = 0; i < num; i++) {
			numList[i] = Math.floor(this.calcRndInteger(1, 1000))
		}
		return numList
	}

	createMockUser() {
		return {
			email: faker.internet.email(),
			name: faker.name.firstName(),
			lastname: faker.name.lastName(),
			password: String(faker.internet.password()),
		}
	}
}

const randomService = new Random()

export default randomService
