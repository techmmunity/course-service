/* eslint-disable @typescript-eslint/naming-convention */

import { v1 } from "./src/v1";

import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
	service: "course-service",
	frameworkVersion: "2",
	useDotenv: true,
	package: {
		individually: true,
	},
	custom: {
		webpack: {
			webpackConfig: "./webpack.config.js",
			includeModules: true,
		},
	},
	plugins: ["serverless-webpack", "serverless-offline"],
	provider: {
		name: "aws",
		runtime: "nodejs14.x",
		apiGateway: {
			minimumCompressionSize: 1024,
			shouldStartNameWithService: true,
		},
		environment: {
			AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
			DYNAMODB_ACCESS_KEY_ID: process.env.DYNAMODB_ACCESS_KEY_ID!,
			DYNAMODB_SECRET_ACCESS_KEY: process.env.DYNAMODB_SECRET_ACCESS_KEY!,
		},
		lambdaHashingVersion: "20201221",
	},
	functions: { v1 },
};

module.exports = serverlessConfiguration;
