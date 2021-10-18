import { CourseService } from "v1/api/course/course.service";
import { getDescribe } from "v1/tests/helpers/get-describe";

import { exampleMock } from "v1/tests/mocks/course";

// eslint-disable-next-line jest/valid-title
describe(getDescribe(__filename), () => {
	let service: CourseService;

	beforeAll(async () => {
		service = await exampleMock.service();
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});
