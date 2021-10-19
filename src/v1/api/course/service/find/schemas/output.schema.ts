import { CourseEntity } from "v1/api/course/course.entity";

type ColumnsToPick =
	| "description"
	| "id"
	| "name"
	| "previewImageUrl"
	| "releasedAt"
	| "seniority"
	| "toolkit";

export type V1FindCourseOutputSchema = Pick<CourseEntity, ColumnsToPick>;
