import { Test, TestingModule } from "@nestjs/testing";

import { getRepositoryToken } from "@techmmunity/symbiosis-nestjs";
import { MockRepository } from "../repository";
import { episodeMock } from "../episode";
import { CourseService } from "v1/api/course/course.service";
import { CourseEntity } from "v1/api/course/course.entity";
import { EpisodeEntity } from "v1/api/episode/entities/episode.entity";

export const service = (mockRepository: MockRepository) => async () => {
	const module: TestingModule = await Test.createTestingModule({
		providers: [
			CourseService,
			{
				provide: getRepositoryToken(CourseEntity),
				useValue: mockRepository,
			},
			{
				provide: getRepositoryToken(EpisodeEntity),
				useValue: episodeMock.repository,
			},
		],
	}).compile();

	return module.get<CourseService>(CourseService);
};
