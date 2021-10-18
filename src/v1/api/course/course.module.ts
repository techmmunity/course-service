import { Module } from "@nestjs/common";
import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";

import { CourseEntity } from "v1/entities/course";

import { CourseService } from "./course.service";
import { CourseController } from "./course.controller";

@Module({
	imports: [SymbiosisModule.forFeature([CourseEntity])],
	providers: [CourseService],
	controllers: [CourseController],
})
export class CourseModule {}
