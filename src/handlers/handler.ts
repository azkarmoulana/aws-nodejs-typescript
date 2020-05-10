import services from "../services/service";
import { handler as io } from "../io/index";

export const hello = async (event, _context) => {
  const result = services.hello(event);
  return io.returnSuccess(result);
};

export const goodBye = async (event, _context) => {
  const result = services.goodBye(event);
  return io.returnSuccess(result);
};
