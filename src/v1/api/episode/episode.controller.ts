import { Controller, Get, Param } from "@nestjs/common";
import { EpisodeService } from "./episode.service";
import { API_VERSION } from "v1/config";

@Controller({
	path: "episode",
	version: API_VERSION,
})
export class EpisodeController {
	public constructor(private readonly episodeService: EpisodeService) {}

	@Get("/:courseId/:episodeId")
	public findOne(
		@Param("courseId") courseId: string,
		@Param("episodeId") episodeId: string,
	) {
		return this.episodeService.findOne({
			courseId,
			episodeId,
		});
	}
}
