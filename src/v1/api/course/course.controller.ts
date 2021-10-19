import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CourseService } from "./course.service";
import { V1CreateCourseInputSchema } from "./service/create/schemas/input.schema";
import { V1FindCourseInputSchema } from "./service/find/schemas/input.schema";
import { API_VERSION } from "v1/config";

@Controller({
	path: "course",
	version: API_VERSION,
})
export class CourseController {
	public constructor(private readonly courseService: CourseService) {}

	@Post()
	public create(@Body() data: V1CreateCourseInputSchema) {
		return this.courseService.create(data);
	}

	@Get("/find")
	public find(@Query() data: V1FindCourseInputSchema) {
		return this.courseService.find(data);
	}

	@Get("/:courseId")
	public findOne(@Param("courseId") courseId: string) {
		return this.courseService.findOne({ courseId });
	}
}
