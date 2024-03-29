import { makeMockRepository } from "../repository";
import { doc } from "./doc";

import { service } from "./service";

const repository = makeMockRepository();

export const courseMock = {
	doc,
	repository,
	service: service(repository),
};
