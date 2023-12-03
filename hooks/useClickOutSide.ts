import { useEffect, useRef } from "react";

export default function useClickOutSide(cb?: () => void, nodes?: any) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
        cb?.();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [nodes]);

  return {
    nodeRef,
  };
}
