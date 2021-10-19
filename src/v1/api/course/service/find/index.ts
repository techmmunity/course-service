import { V1FindCourseInputSchema } from "./schemas/input.schema";

import { validate } from "./validate";
import { CourseRepository } from "v1/api/course/course.entity";

interface Injectables {
	courseRepository: CourseRepository;
}

export const find = async (
	{ courseRepository }: Injectables,
	params: V1FindCourseInputSchema,
) => {
	const { lastResultId } = await validate(params);

	return courseRepository.find({
		startFrom: {
			id: lastResultId,
		},
		take: 10,
		select: [
			"description",
			"id",
			"name",
			"previewImageUrl",
			"seniority",
			"toolkit",
			"releasedAt",
		],
	});
};
