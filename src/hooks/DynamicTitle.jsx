import { useEffect } from "react";

const DynamicTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Toy Shop`;
  }, [title]);
};

export default DynamicTitle;
