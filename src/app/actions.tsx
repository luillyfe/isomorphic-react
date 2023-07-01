"use server";

import { revalidatePath } from "next/cache";
import { getFromDatasource, saveToDatasource } from "@/store";

export async function getNextPage() {
  const { pageNumber } = getFromDatasource();
  saveToDatasource(pageNumber + 1);
  revalidatePath("/home");
}
