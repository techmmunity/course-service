import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";
import {
	DynamodbConnection,
	DynamoDbConnectionOptions,
} from "@techmmunity/symbiosis-dynamodb";

import { DynamicModule } from "@nestjs/common";
import { CourseEntity } from "v1/entities/course";
import { AnswerEntity } from "v1/entities/answer";
import { EpisodeEntity } from "v1/entities/episode";
import { QuizEntity } from "v1/entities/quiz";
import { ResourceEntity } from "v1/entities/resource";
import { VideoEntity } from "v1/entities/video";

const { DYNAMODB_ACCESS_KEY_ID, DYNAMODB_SECRET_ACCESS_KEY } = process.env;

export const DYNAMO_CONNECT: DynamicModule =
	SymbiosisModule.forRoot<DynamoDbConnectionOptions>(DynamodbConnection, {
		entities: [
			AnswerEntity,
			CourseEntity,
			EpisodeEntity,
			QuizEntity,
			ResourceEntity,
			VideoEntity,
		],
		namingStrategy: {
			entity: "snake_case",
			column: "camelCase",
		},
		suffix: {
			entity: {
				remove: "_entity",
			},
		},
		databaseConfig: {
			region: "us-east-1",
			credentials: {
				accessKeyId: DYNAMODB_ACCESS_KEY_ID,
				secretAccessKey: DYNAMODB_SECRET_ACCESS_KEY,
			},
		},
	});
