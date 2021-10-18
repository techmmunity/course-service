import { PrimaryGeneratedColumn, Column, Entity } from "@techmmunity/symbiosis";
import { AnswerEntity } from "./answer";

@Entity({
	isSubEntity: true,
})
export class QuizEntity {
	@PrimaryGeneratedColumn()
	public id: string;

	@Column()
	public question: string;

	@Column()
	public shortDescription: string;

	@Column()
	public rightAnswerId: string;

	/**
	 *
	 * SubEntities
	 *
	 */

	@Column(AnswerEntity)
	public answers: Array<AnswerEntity>;
}
