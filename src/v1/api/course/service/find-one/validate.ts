/* eslint-disable @typescript-eslint/no-magic-numbers */

import { fields } from "v1/validation/fields";
import { V1FindOneCourseInputSchema } from "./schemas/input.schema";

import { makeValidate } from "v1/validation/validate";
import { yup } from "v1/utils/yup";

const schema = yup.object().required().strict().shape({
	courseId: fields.id.required(),
});

export const validate = makeValidate<V1FindOneCourseInputSchema>(schema);
