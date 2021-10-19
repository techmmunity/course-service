import { V1CreateCourseInputSchema } from "./schemas/input.schema";

import { validate } from "./validate";
import { CourseEntity, CourseRepository } from "v1/api/course/course.entity";
import { EpisodeRepository } from "v1/api/episode/entities/episode.entity";

interface Injectables {
	courseRepository: CourseRepository;
	episodeRepository: EpisodeRepository;
}

export const create = async (
	{ courseRepository, episodeRepository }: Injectables,
	params: V1CreateCourseInputSchema,
) => {
	const { episodes, ...course } = await validate(params);

	const workload = episodes.reduce(
		(acc, cur) => acc + cur.video.durationInSeconds,
		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		0,
	);
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	const quizCount = episodes.reduce((acc, cur) => acc + cur.quizzes.length, 0);

	const { id: courseId } = (await courseRepository.save({
		...course,
		workload,
		quizCount,
	})) as CourseEntity;

	await episodeRepository.save(
		episodes.map(ep => ({
			...ep,
			courseId,
		})),
	);

	return {
		courseId,
	};
};
