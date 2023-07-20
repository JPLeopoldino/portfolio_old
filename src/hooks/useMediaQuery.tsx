import { useMediaQuery as useRRMediaQuery } from "react-responsive";

export default function useMediaQuery() {
  const sm = useRRMediaQuery({
    query: "(min-width: 640px)",
  });

  const md = useRRMediaQuery({
    query: "(min-width: 768px)",
  });

  const lg = useRRMediaQuery({
    query: "(min-width: 1024px)",
  });

  const xl = useRRMediaQuery({
    query: "(min-width: 1280px)",
  });

  const xxl = useRRMediaQuery({
    query: "(min-width: 1536px)",
  });

  return { sm, md, lg, xl, xxl };
}
