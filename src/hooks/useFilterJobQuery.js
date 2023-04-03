import { useContext } from "react";
import FilterJobContext from "../context/FilterProvider";

export default function useFilterJobQuery() {
  return useContext(FilterJobContext);
}
