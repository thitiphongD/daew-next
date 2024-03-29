"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Callout } from "@radix-ui/themes";
import Spinner from "../components/Spinner";

interface IssueForm {
  title: string;
  des: string;
}
const NewIssuePage: React.FC = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();

  const handleSubmitNewIssue = handleSubmit(async (data) => {
    try {
      setIsSubmit(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error: any) {
      setIsSubmit(false);
      console.log(error);
    }
  });

  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={handleSubmitNewIssue}>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-zinc-400 mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Title"
            className="p-2 w-full text-sm text-zinc-400 bg-zinc-800 placeholder-zinc-400 border-zinc-600 rounded-md font-semibold"
            {...register("title")}
          />
        </div>
        <Controller
          name="des"
          control={control}
          render={({ field }) => (
            <textarea
              className="p-2 w-full text-sm text-zinc-400 bg-zinc-800 placeholder-zinc-400 border-zinc-600 rounded-md font-semibold h-20"
              placeholder="Description here..."
              {...field}
            ></textarea>
          )}
        />

        <button
          type="submit"
          disabled={isSubmit}
          className="bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 focus:outline-none focus:shadow-outline-emerald active:bg-emerald-800"
        >
          Submit
          {isSubmit && <Spinner />}
        </button>
      </form>
    </div>
  );
};

export default NewIssuePage;
