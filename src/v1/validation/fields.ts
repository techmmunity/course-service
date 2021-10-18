/* eslint-disable @typescript-eslint/no-magic-numbers */

import { getEnumValues } from "@techmmunity/utils";
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
	toolkit: array.of(string).max(25),
	tags: array.of(string).max(25),
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
			rightAnswerId: id,
			answers: {
				id,
				answer: string.min(2).max(1000),
			},
		},
	},
};
