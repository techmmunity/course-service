import { PrimaryGeneratedColumn, Column, Entity } from "@techmmunity/symbiosis";

@Entity({
	isSubEntity: true,
})
export class AnswerEntity {
	@PrimaryGeneratedColumn()
	public id: string;

	@Column()
	public answer: string;
}
