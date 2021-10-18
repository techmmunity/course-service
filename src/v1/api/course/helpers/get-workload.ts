interface GetWorkloadParams {
	video: {
		durationInSeconds: number;
	};
}

export const getWorkload = (episodes: Array<GetWorkloadParams>) =>
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	episodes.reduce((acc, ep) => acc + ep.video.durationInSeconds, 0);
