/* eslint-disable @typescript-eslint/no-magic-numbers */

import { fields } from "v1/validation/fields";
import { V1FindCourseInputSchema } from "./schemas/input.schema";

import { makeValidate } from "v1/validation/validate";
import { yup } from "v1/utils/yup";

const schema = yup.object().required().strict().shape({
	lastResultId: fields.id.notRequired(),
});

export const validate = makeValidate<V1FindCourseInputSchema>(schema);
