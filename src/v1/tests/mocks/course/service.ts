import { Test, TestingModule } from "@nestjs/testing";

import { getRepositoryToken } from "@techmmunity/symbiosis-nestjs";
import { CourseEntity } from "v1/entities/course";
import { MockRepository } from "../repository";
import { CourseService } from "v1/api/course/course.service";

export const service = (mockRepository: MockRepository) => async () => {
	const module: TestingModule = await Test.createTestingModule({
		providers: [
			CourseService,
			{
				provide: getRepositoryToken(CourseEntity),
				useValue: mockRepository,
			},
		],
	}).compile();

	return module.get<CourseService>(CourseService);
};
