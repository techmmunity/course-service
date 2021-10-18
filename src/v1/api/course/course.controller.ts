import { Body, Controller, Post } from "@nestjs/common";
import { CourseService } from "./course.service";
import { V1CreateCourseInputSchema } from "./service/create/schemas/input.schema";
import { API_VERSION } from "v1/config";

@Controller(`${API_VERSION}/course`)
export class CourseController {
	public constructor(private readonly exampleService: CourseService) {}

	@Post()
	public create(@Body() data: V1CreateCourseInputSchema) {
		return this.exampleService.create(data);
	}
}
