import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@techmmunity/symbiosis-nestjs";

import { create } from "./service/create";
import { V1CreateCourseInputSchema } from "./service/create/schemas/input.schema";
import { find } from "./service/find";
import { findOne } from "./service/find-one";
import { V1FindOneCourseInputSchema } from "./service/find-one/schemas/input.schema";
import { V1FindCourseInputSchema } from "./service/find/schemas/input.schema";
import { CourseEntity, CourseRepository } from "v1/api/course/course.entity";
import {
	EpisodeEntity,
	EpisodeRepository,
} from "../episode/entities/episode.entity";

@Injectable()
export class CourseService {
	public constructor(
		@InjectRepository(CourseEntity)
		private readonly courseRepository: CourseRepository,
		@InjectRepository(EpisodeEntity)
		private readonly episodeRepository: EpisodeRepository,
	) {}

	public create(params: V1CreateCourseInputSchema) {
		return create(
			{
				courseRepository: this.courseRepository,
				episodeRepository: this.episodeRepository,
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

	public findOne(params: V1FindOneCourseInputSchema) {
		return findOne(
			{
				courseRepository: this.courseRepository,
				episodeRepository: this.episodeRepository,
			},
			params,
		);
	}
}
