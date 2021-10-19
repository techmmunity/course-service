import { Test, TestingModule } from "@nestjs/testing";

import { getRepositoryToken } from "@techmmunity/symbiosis-nestjs";
import { MockRepository } from "../repository";
import { EpisodeService } from "v1/api/episode/episode.service";
import { EpisodeEntity } from "v1/api/episode/entities/episode.entity";

export const service = (mockRepository: MockRepository) => async () => {
	const module: TestingModule = await Test.createTestingModule({
		providers: [
			EpisodeService,
			{
				provide: getRepositoryToken(EpisodeEntity),
				useValue: mockRepository,
			},
		],
	}).compile();

	return module.get<EpisodeService>(EpisodeService);
};
