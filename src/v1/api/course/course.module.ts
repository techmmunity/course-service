import { Module } from "@nestjs/common";
import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";

import { CourseService } from "./course.service";
import { CourseController } from "./course.controller";
import { CourseEntity } from "v1/api/course/course.entity";
import { EpisodeEntity } from "../episode/entities/episode.entity";

@Module({
	imports: [SymbiosisModule.forFeature([CourseEntity, EpisodeEntity])],
	providers: [CourseService],
	controllers: [CourseController],
})
export class CourseModule {}
