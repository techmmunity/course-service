import { V1FindOneEpisodeInputSchema } from "./schemas/input.schema";
import { getCurrentEpisodeIndex } from "./helpers/get-current-episode-index";

import { validate } from "./validate";
import { EpisodeRepository } from "../../entities/episode.entity";

interface Injectables {
	episodeRepository: EpisodeRepository;
}

export const findOne = async (
	{ episodeRepository }: Injectables,
	params: V1FindOneEpisodeInputSchema,
) => {
	const { courseId, episodeId } = await validate(params);

	const episodes = await episodeRepository.find({
		where: {
			courseId,
		},
	});

	const currentEpisodeIndex = getCurrentEpisodeIndex(episodes, episodeId);

	return {
		currentEpisode: episodes[currentEpisodeIndex],
		// eslint-disable-next-line @typescript-eslint/no-magic-numbers
		nextEpisodeId: episodes[currentEpisodeIndex + 1]?.id,
		allEpisodes: episodes.map(ep => ({
			name: ep.name,
		})),
	};
};
