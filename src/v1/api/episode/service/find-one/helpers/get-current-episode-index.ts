import { EpisodeEntity } from "v1/api/episode/entities/episode.entity";

export const getCurrentEpisodeIndex = (
	episodes: Array<EpisodeEntity>,
	episodeId: string,
) => {
	const currentEpisodeIndex = episodes.findIndex(ep => ep.id === episodeId);

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	if (currentEpisodeIndex < 0) {
		throw new Error("Episode not found");
	}

	return currentEpisodeIndex;
};
