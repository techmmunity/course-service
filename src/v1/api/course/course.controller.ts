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
	public constructor(private readonly exampleService: CourseService) {}

	@Post()
	public create(@Body() data: V1CreateCourseInputSchema) {
		return this.exampleService.create(data);
	}

	@Get("/find")
	public find(@Query() data: V1FindCourseInputSchema) {
		return this.exampleService.find(data);
	}

	@Get("/:courseId")
	public findOne(@Param("courseId") courseId?: string) {
		return this.exampleService.findOne({ courseId });
	}
}
