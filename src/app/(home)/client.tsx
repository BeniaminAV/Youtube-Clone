"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () => {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Video",
  });

  return (
    <div>
      <div> Page Client: {data.greeting}</div>
    </div>
  );
};
