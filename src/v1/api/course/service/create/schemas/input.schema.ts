import { ResourceTypeEnum } from "v1/enums/resource-type";
import { SeniorityEnum } from "v1/enums/seniority";

class V1CreateCourseEpisodeQuizInputSchema {
	public question: string;

	public shortDescription: string;

	public rightAnswerIndex: number;

	public answers: Array<string>;
}

class V1CreateCourseEpisodeResourceInputSchema {
	public type: ResourceTypeEnum;

	public url?: string;

	public title?: string;

	public description?: string;
}

class V1CreateCourseEpisodeVideoInputSchema {
	public durationInSeconds: number;

	public previewImageUrl: string;

	public url: string;

	public version: number;
}

class V1CreateCourseEpisodeInputSchema {
	public name: string;

	public note: string;

	public video: V1CreateCourseEpisodeVideoInputSchema;

	public resources: Array<V1CreateCourseEpisodeResourceInputSchema>;

	public quizzes: Array<V1CreateCourseEpisodeQuizInputSchema>;
}

export class V1CreateCourseInputSchema {
	public name: string;

	public description: string;

	public previewImageUrl?: string;

	public mustKnowBefore?: Array<string>;

	public whereToGoAfter?: Array<string>;

	public available?: boolean;

	public seniority: SeniorityEnum;

	public toolkit: Array<string>;

	public tags: Array<string>;

	public episodes: Array<V1CreateCourseEpisodeInputSchema>;
}
