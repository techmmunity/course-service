import { CourseEntity, CourseRepository } from "v1/entities/course";
import { V1CreateCourseInputSchema } from "./schemas/input.schema";

import { validate } from "./validate";

interface Injectables {
	courseRepository: CourseRepository;
}

export const create = async (
	{ courseRepository }: Injectables,
	params: V1CreateCourseInputSchema,
) => {
	// Const data = await validate(params);

	const result = (await courseRepository.save(params)) as CourseEntity;

	return {
		courseId: result.id,
	};
};
