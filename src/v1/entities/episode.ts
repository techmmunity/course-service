import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	SaveDateColumn,
	UpdateDateColumn,
} from "@techmmunity/symbiosis";
import { QuizEntity } from "./quiz";
import { ResourceEntity } from "./resource";
import { VideoEntity } from "./video";

@Entity({
	isSubEntity: true,
})
export class EpisodeEntity {
	@PrimaryGeneratedColumn()
	public id: string;

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
