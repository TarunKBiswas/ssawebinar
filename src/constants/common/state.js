import { proxy } from "valtio";

const state = proxy({
  vdoUrl: "",
  videoModal: false,
});

export { state };
