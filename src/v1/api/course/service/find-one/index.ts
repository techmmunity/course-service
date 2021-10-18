import { CourseRepository } from "v1/entities/course";
import { V1FindOneCourseInputSchema } from "./schemas/input.schema";
import { getQuizCount } from "../../helpers/get-quiz-count";
import { getWorkload } from "../../helpers/get-workload";

import { getCoursesData } from "./helpers/get-courses-data";
import { validate } from "./validate";

interface Injectables {
	courseRepository: CourseRepository;
}

export const findOne = async (
	{ courseRepository }: Injectables,
	params: V1FindOneCourseInputSchema,
) => {
	const { courseId } = await validate(params);

	const course = await courseRepository.findOne({
		where: {
			id: courseId,
		},
		select: [
			"id",
			"name",
			"description",
			"previewImageUrl",
			"mustKnowBefore",
			"whereToGoAfter",
			"seniority",
			"releasedAt",
			"toolkit",
			"tags",
			"episodes",
		],
	});

	const coursesData = await getCoursesData({
		course,
		courseRepository,
	});

	return {
		id: course.id,
		name: course.name,
		description: course.description,
		previewImageUrl: course.previewImageUrl,
		seniority: course.seniority,
		releasedAt: course.releasedAt,
		toolkit: course.toolkit,
		tags: course.tags,
		workload: getWorkload(course.episodes),
		quizCount: getQuizCount(course.episodes),
		mustKnowBefore: course.mustKnowBefore?.map(subCourseId =>
			coursesData.find(subCourse => subCourse.id === subCourseId),
		),
		whereToGoAfter: course.whereToGoAfter?.map(subCourseId =>
			coursesData.find(subCourse => subCourse.id === subCourseId),
		),
	};
};
