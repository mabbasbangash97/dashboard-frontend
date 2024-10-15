import BaseService from "./base-service";
const commonHeaders = {
  "Content-Type": "application/json",
};

export function getUsers() {
  return BaseService.get("/users/") as any;
}