import { PrimaryGeneratedColumn, Column, Entity } from "@techmmunity/symbiosis";

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
	public rightAnswerIndex: number;

	/**
	 *
	 * SubEntities
	 *
	 */

	@Column(String)
	public answers: Array<string>;
}
