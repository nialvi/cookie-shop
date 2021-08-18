import {
  CartStorageService,
  OrdersStorageService,
  UserStorageService,
  CookieStorageService,
} from "../application/ports";
import { useStore } from "./store";

export function useUserStorage(): UserStorageService {
  return useStore();
}

export function useCartStorage(): CartStorageService {
  return useStore();
}

export function useOrdersStorage(): OrdersStorageService {
  return useStore();
}

export function useCookieStorage(): CookieStorageService {
  return useStore();
}
