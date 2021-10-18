interface GetQuizCountParams {
	quizzes: Array<any>;
}

export const getQuizCount = (episodes: Array<GetQuizCountParams>) =>
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	episodes.reduce((acc, ep) => acc + ep.quizzes.length, 0);
