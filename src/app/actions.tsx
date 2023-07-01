"use server";

// TODO: remove test action
export async function sendAction(data: string) {
  console.log("Run on the server!");
  console.log(data);
}
