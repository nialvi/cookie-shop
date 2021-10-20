import {
  CartStorageService,
  UserStorageService,
  CookieStorageService,
} from "../useCases/port";
import { useStore } from "../../../store";
import { OrdersStorageService } from "../../order/useCases/port";

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
