import { CourseEntity } from "v1/entities/course";

type ColumnsToPick =
	| "description"
	| "id"
	| "name"
	| "previewImageUrl"
	| "releasedAt"
	| "seniority"
	| "toolkit";

export type V1CreateCourseOutputSchema = Pick<CourseEntity, ColumnsToPick>;
