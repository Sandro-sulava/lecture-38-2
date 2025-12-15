import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "./fetchPosts";

type UsePostsParams = {
  page: number;
  limit: number;
};

export const usePosts = ({ page, limit }: UsePostsParams) => {
  return useQuery({
    queryKey: ["posts", page, limit],
    queryFn: () => fetchPosts({ page, limit }),
    placeholderData: (prev) => prev,
  });
};
