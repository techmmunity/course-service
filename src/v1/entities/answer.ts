import { Column, Entity } from "@techmmunity/symbiosis";

@Entity({
	isSubEntity: true,
})
export class AnswerEntity {
	@Column()
	public id: string;

	@Column()
	public answer: string;
}
