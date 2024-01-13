"use client";
import React, { useState } from "react";

const NewIssuePage = () => {
  return (
    <form className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-semibold text-zinc-400 mb-1">
          Title
        </label>
        <input
          type="text"
          placeholder="Title"
          className="p-2 w-full text-sm bg-zinc-800 placeholder-zinc-400 border-zinc-600 rounded-md font-semibold"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-zinc-400 mb-1">
          Description
        </label>
        <textarea
          className="p-2 w-full text-sm bg-zinc-800 placeholder-zinc-400 border-zinc-600 rounded-md font-semibold h-20"
          placeholder="Description here..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-emerald-500 text-white py-2 px-4 rounded-md hover:bg-emerald-600 focus:outline-none focus:shadow-outline-emerald active:bg-emerald-800"
      >
        Submit
      </button>
    </form>
  );
};

export default NewIssuePage;
