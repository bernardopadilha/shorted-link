import { useContext } from "react";
import { ShortLinkContext } from "../context/short-link-context";

export function useLink() {
  const value = useContext(ShortLinkContext)

  return value
}