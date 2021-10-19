import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@techmmunity/symbiosis-nestjs";

import { findOne } from "./service/find-one";
import { V1FindOneEpisodeInputSchema } from "./service/find-one/schemas/input.schema";
import { EpisodeEntity, EpisodeRepository } from "./entities/episode.entity";

@Injectable()
export class EpisodeService {
	public constructor(
		@InjectRepository(EpisodeEntity)
		private readonly episodeRepository: EpisodeRepository,
	) {}

	public findOne(params: V1FindOneEpisodeInputSchema) {
		return findOne(
			{
				episodeRepository: this.episodeRepository,
			},
			params,
		);
	}
}
