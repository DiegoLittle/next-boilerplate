import create, { StoreApi, UseBoundStore } from "zustand";

export interface DefaultStore {}
export const useDefaultStore: UseBoundStore<StoreApi<DefaultStore>> =
  create <
  DefaultStore >
  ((
    set: StoreApi<DefaultStore>["setState"],
    get: StoreApi<DefaultStore>["getState"]
  ) => ({}));
