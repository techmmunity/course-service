import { makeHandler } from "helpers/make-handler";
import { V1Module } from "./v1.module";

export const handler = makeHandler(V1Module);
