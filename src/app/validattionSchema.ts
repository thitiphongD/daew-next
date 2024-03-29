import { z } from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(1, "Title is require").max(255),
  des: z.string().min(1, "Description is require"),
});
