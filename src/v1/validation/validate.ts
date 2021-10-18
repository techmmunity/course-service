import { ObjectSchema } from "yup";
import { errorUtil } from "v1/utils/error";

export const makeValidate =
	<T>(schema: ObjectSchema<any>) =>
	(params: T): Promise<T> =>
		schema.validate(params).catch(err => errorUtil.badRequest(err.errors));
