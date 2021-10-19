import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";
import {
	DynamodbConnection,
	DynamoDbConnectionOptions,
} from "@techmmunity/symbiosis-dynamodb";

import { DynamicModule } from "@nestjs/common";
import { EpisodeEntity } from "v1/api/episode/entities/episode.entity";
import { CourseEntity } from "v1/api/course/course.entity";

const { DYNAMODB_ACCESS_KEY_ID, DYNAMODB_SECRET_ACCESS_KEY } = process.env;

export const DYNAMO_CONNECT: DynamicModule =
	SymbiosisModule.forRoot<DynamoDbConnectionOptions>(DynamodbConnection, {
		entities: [CourseEntity, EpisodeEntity],
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
