import { Column, Entity } from "@techmmunity/symbiosis";

@Entity({
	isSubEntity: true,
})
export class VideoEntity {
	@Column()
	public durationInSeconds: number;

	@Column()
	public previewImageUrl: string;

	@Column()
	public url: string;

	@Column()
	public version: number;
}
