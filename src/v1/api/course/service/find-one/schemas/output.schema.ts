import { CourseEntity } from "v1/api/course/course.entity";

type ColumnsToPick =
	| "description"
	| "id"
	| "name"
	| "previewImageUrl"
	| "quizCount"
	| "releasedAt"
	| "seniority"
	| "tags"
	| "toolkit"
	| "workload";

type ColumnsToPickSubCourse =
	| "description"
	| "id"
	| "name"
	| "previewImageUrl"
	| "releasedAt"
	| "seniority"
	| "toolkit";

type V1FindOneCourseOutputSchema = Pick<CourseEntity, ColumnsToPickSubCourse>;

export interface V1CreateCourseOutputSchema
	extends Pick<CourseEntity, ColumnsToPick> {
	whereToGoAfter: Array<V1FindOneCourseOutputSchema>;
	mustKnownBefore: Array<V1FindOneCourseOutputSchema>;
}
