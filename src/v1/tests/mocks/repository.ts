export interface MockRepository {
	find: jest.Mock;
	findOne: jest.Mock;
	save: jest.Mock;
	delete: jest.Mock;
}

export const makeMockRepository = (): MockRepository => ({
	find: jest.fn(),
	findOne: jest.fn(),
	save: jest.fn(),
	delete: jest.fn(),
});
