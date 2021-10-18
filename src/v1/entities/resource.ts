import { Column, Entity } from "@techmmunity/symbiosis";
import { ResourceTypeEnum } from "v1/enums/resource-type";

@Entity({
	isSubEntity: true,
})
export class ResourceEntity {
	@Column({
		enum: ResourceTypeEnum,
	})
	public type: ResourceTypeEnum;

	@Column()
	public url?: string;

	@Column()
	public previewImageUrl?: string;

	@Column()
	public title?: string;

	@Column()
	public description?: string;
}
