import { CourseService } from "v1/api/course/course.service";
import { getDescribe } from "v1/tests/helpers/get-describe";

import { courseMock } from "v1/tests/mocks/course";

// eslint-disable-next-line jest/valid-title
describe(getDescribe(__filename), () => {
	let service: CourseService;

	beforeAll(async () => {
		service = await courseMock.service();
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});
});
