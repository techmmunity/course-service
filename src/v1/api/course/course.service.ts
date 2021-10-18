import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@techmmunity/symbiosis-nestjs";

import { CourseEntity, CourseRepository } from "v1/entities/course";

import { create } from "./service/create";
import { V1CreateCourseInputSchema } from "./service/create/schemas/input.schema";
import { find } from "./service/find";
import { V1FindCourseInputSchema } from "./service/find/schemas/input.schema";

@Injectable()
export class CourseService {
	public constructor(
		@InjectRepository(CourseEntity)
		private readonly courseRepository: CourseRepository,
	) {}

	public create(params: V1CreateCourseInputSchema) {
		return create(
			{
				courseRepository: this.courseRepository,
			},
			params,
		);
	}

	public find(params: V1FindCourseInputSchema) {
		return find(
			{
				courseRepository: this.courseRepository,
			},
			params,
		);
	}
}
