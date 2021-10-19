/* eslint-disable @typescript-eslint/no-magic-numbers */

import { getEnumValues, getTypeof } from "@techmmunity/utils";
import { yup } from "v1/utils/yup";
import { SeniorityEnum } from "v1/enums/seniority";
import { ResourceTypeEnum } from "v1/enums/resource-type";

const string = yup.string().strict();
const number = yup.number().strict();
const boolean = yup.boolean().strict();
const array = yup.array().strict();

const id = string.uuid();
const title = string.min(2).max(150);

export const fields = {
	id,
	name: title,
	description: string.min(10).max(5000),
	previewImageUrl: string.url(),
	mustKnowBefore: array.of(string.uuid()).max(5),
	whereToGoAfter: array.of(string.uuid()).max(5),
	available: boolean,
	seniority: string.oneOf(getEnumValues(SeniorityEnum)),
	toolkit: array.of(string).max(25).min(1),
	tags: array.of(string).max(25).min(1),
	episodes: {
		id,
		name: title,
		note: string.max(5000),
		video: {
			durationInSeconds: number.positive(),
			previewImageUrl: string.url(),
			url: string.url(),
			version: number.positive(),
		},
		resources: {
			title,
			description: string.min(2).max(250),
			previewImageUrl: string.url(),
			url: string.url(),
			type: string.oneOf(getEnumValues(ResourceTypeEnum)),
		},
		quizzes: {
			id,
			question: title,
			shortDescription: string.min(2).max(1500),
			answers: array.of(string.min(2).max(1000)).min(2).max(5),
			rightAnswerIndex: number.min(0),
		},
	},
};

export const quiz = yup
	.object()
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	.when("literally-any-value", (_, schemaParam, value) => {
		const maybeLength = value?.value?.answers?.length;

		const max = getTypeof(maybeLength) === "number" ? maybeLength - 1 : -1;

		return schemaParam.shape({
			question: fields.episodes.quizzes.question.required(),
			shortDescription: fields.episodes.quizzes.shortDescription.required(),
			answers: fields.episodes.quizzes.answers.required(),
			rightAnswerIndex: fields.episodes.quizzes.rightAnswerIndex.max(
				max,
				"rightAnswerIndex must match with the answers",
			),
		});
	});
