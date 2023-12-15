"use server";

import { connectToDB } from "../mongoose";

export const updateUser = async (): Promise<void> => {
  connectToDB();

  try {
  } catch (error) {
    console.log(error);
    throw error;
  }
};
