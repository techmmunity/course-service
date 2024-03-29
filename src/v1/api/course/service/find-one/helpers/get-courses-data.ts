import { CourseEntity, CourseRepository } from "v1/api/course/course.entity";

interface GetCoursesDataParams {
	courseRepository: CourseRepository;
	course: CourseEntity;
}

export const getCoursesData = ({
	course,
	courseRepository,
}: GetCoursesDataParams) =>
	Promise.all(
		[...(course.mustKnowBefore || []), ...(course.whereToGoAfter || [])].map(
			subCourseId =>
				courseRepository.findOne({
					where: {
						id: subCourseId,
					},
					select: [
						"id",
						"name",
						"description",
						"previewImageUrl",
						"seniority",
						"releasedAt",
						"toolkit",
					],
				}),
		),
	);
