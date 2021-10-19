import { Module } from "@nestjs/common";
import { SymbiosisModule } from "@techmmunity/symbiosis-nestjs";

import { EpisodeService } from "./episode.service";
import { EpisodeController } from "./episode.controller";
import { EpisodeEntity } from "./entities/episode.entity";

@Module({
	imports: [SymbiosisModule.forFeature([EpisodeEntity])],
	providers: [EpisodeService],
	controllers: [EpisodeController],
})
export class EpisodeModule {}
