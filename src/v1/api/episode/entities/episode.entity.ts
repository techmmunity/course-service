import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	SaveDateColumn,
	UpdateDateColumn,
	PrimaryColumn,
	Repository,
} from "@techmmunity/symbiosis";
import { QuizEntity } from "./quiz.entity";
import { ResourceEntity } from "./resource.entity";
import { VideoEntity } from "./video.entity";

@Entity({
	isSubEntity: true,
})
export class EpisodeEntity {
	@PrimaryGeneratedColumn({
		extras: {
			sortKey: true,
		},
	})
	public id: string;

	@PrimaryColumn()
	public courseId: string;

	@Column()
	public name: string;

	@Column()
	public note: string;

	@SaveDateColumn({
		comment: "ISO Date",
	})
	public createdAt: string;

	@UpdateDateColumn({
		comment: "ISO Date",
	})
	public updatedAt: string;

	/**
	 *
	 * SubEntities
	 *
	 */

	@Column()
	public video: VideoEntity;

	@Column(ResourceEntity)
	public resources: Array<ResourceEntity>;

	@Column(QuizEntity)
	public quizzes: Array<QuizEntity>;
}

export type EpisodeRepository = Repository<EpisodeEntity>;
