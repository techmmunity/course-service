import { EpisodeEntity } from "v1/api/episode/entities/episode.entity";

interface V1FindOneEpisodeAllEpisodesOutputSchema {
	name: string;
}

export interface V1FindOneEpisodeOutputSchema {
	currentEpisode: EpisodeEntity;
	nextEpisodeId: string;
	allEpisodes: Array<V1FindOneEpisodeAllEpisodesOutputSchema>;
}
