import { V1FindOneCourseInputSchema } from "./schemas/input.schema";

import { getCoursesData } from "./helpers/get-courses-data";
import { validate } from "./validate";
import { CourseRepository } from "v1/api/course/course.entity";
import { EpisodeRepository } from "v1/api/episode/entities/episode.entity";

interface Injectables {
	courseRepository: CourseRepository;
	episodeRepository: EpisodeRepository;
}

export const findOne = async (
	{ courseRepository, episodeRepository }: Injectables,
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
			"workload",
			"quizCount",
		],
	});

	if (!course) {
		throw new Error("Course not found");
	}

	const [episodes, coursesData] = await Promise.all([
		episodeRepository.find({
			where: {
				courseId,
			},
			select: ["name", "id", "video.previewImageUrl"],
		}),
		getCoursesData({
			course,
			courseRepository,
		}),
	]);

	return {
		id: course.id,
		name: course.name,
		description: course.description,
		previewImageUrl: course.previewImageUrl,
		seniority: course.seniority,
		releasedAt: course.releasedAt,
		toolkit: course.toolkit,
		tags: course.tags,
		workload: course.workload,
		quizCount: course.quizCount,
		mustKnowBefore: course.mustKnowBefore?.map(subCourseId =>
			coursesData.find(subCourse => subCourse.id === subCourseId),
		),
		whereToGoAfter: course.whereToGoAfter?.map(subCourseId =>
			coursesData.find(subCourse => subCourse.id === subCourseId),
		),
		episodes,
	};
};
