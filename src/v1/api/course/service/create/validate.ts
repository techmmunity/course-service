/* eslint-disable @typescript-eslint/no-magic-numbers */

import { fields } from "v1/validation/fields";
import { V1CreateCourseInputSchema } from "./schemas/input.schema";

import { makeValidate } from "v1/validation/validate";
import { yup } from "v1/utils/yup";

const { episodes } = fields;

const schema = yup
	.object()
	.required()
	.strict()
	.shape({
		name: fields.name.required(),
		description: fields.description.required(),
		previewImageUrl: fields.previewImageUrl.notRequired(),
		mustKnowBefore: fields.mustKnowBefore.notRequired(),
		whereToGoAfter: fields.whereToGoAfter.notRequired(),
		available: fields.available.notRequired(),
		seniority: fields.seniority.required(),
		toolkit: fields.toolkit.required().min(1),
		tags: fields.tags.required().min(1),
		episodes: yup
			.array()
			.strict()
			.required()
			.of(
				yup
					.object()
					.strict()
					.required()
					.shape({
						name: episodes.name.required(),
						note: episodes.note.required(),
						video: yup.object().strict().required().shape({
							durationInSeconds: episodes.video.durationInSeconds.required(),
							previewImageUrl: episodes.video.previewImageUrl.required(),
							url: episodes.video.url.required(),
							version: episodes.video.version.required(),
						}),
						resources: yup
							.array()
							.strict()
							.required()
							.of(
								yup.object().strict().required().shape({
									title: episodes.resources.title.notRequired(),
									description: episodes.resources.description.notRequired(),
									url: episodes.resources.url.notRequired(),
									previewImageUrl:
										episodes.resources.previewImageUrl.notRequired(),
									type: episodes.resources.type.required(),
								}),
							),
						quizzes: yup
							.array()
							.strict()
							.required()
							.of(
								yup
									.object()
									.strict()
									.required()
									.shape({
										question: episodes.quizzes.question.required(),
										rightAnswerId: episodes.quizzes.rightAnswerId.required(),
										shortDescription:
											episodes.quizzes.shortDescription.required(),
										answers: yup
											.array()
											.strict()
											.required()
											.of(
												yup.object().strict().required().shape({
													answer: episodes.quizzes.answers.answer.required(),
												}),
											)
											.min(2),
									}),
							),
					}),
			),
	});

export const validate = makeValidate<V1CreateCourseInputSchema>(schema);
