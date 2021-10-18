import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	Repository,
	SaveDateColumn,
	UpdateDateColumn,
} from "@techmmunity/symbiosis";
import { EpisodeEntity } from "./episode";
import { SeniorityEnum } from "v1/enums/seniority";

@Entity()
export class CourseEntity {
	@PrimaryGeneratedColumn()
	public id: string;

	@Column()
	public name: string;

	@Column()
	public description: string;

	@Column()
	public previewImageUrl?: string;

	@Column({
		type: String,
		comment: "Array of courses to do BEFORE this one",
	})
	public mustKnowBefore?: Array<string>;

	@Column({
		type: String,
		comment: "Array of courses to do AFTER this one",
	})
	public whereToGoAfter?: Array<string>;

	@SaveDateColumn({
		comment: "ISO Date",
	})
	public createdAt: string;

	@UpdateDateColumn({
		comment: "ISO Date",
	})
	public updatedAt: string;

	@Column({
		comment: "ISO Date - Auto generated when available set to true",
	})
	public releasedAt: string;

	@Column({
		defaultValue: false,
	})
	public available: boolean;

	@Column({
		enum: SeniorityEnum,
	})
	public seniority: SeniorityEnum;

	@Column(String)
	public toolkit: Array<string>;

	@Column(String)
	public tags: Array<string>;

	/**
	 *
	 * SubEntities
	 *
	 */

	@Column(EpisodeEntity)
	public episodes: Array<EpisodeEntity>;
}

export type CourseRepository = Repository<CourseEntity>;
