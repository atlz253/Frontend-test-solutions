import { Request } from "express";

export interface RequestBody<T = any> extends Request {
  body: T;
}
