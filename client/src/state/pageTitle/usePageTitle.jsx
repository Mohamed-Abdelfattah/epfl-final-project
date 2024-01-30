import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageTitleContext } from "./PageTitleContext";

export function useSetPageTitle(titleFromComponent = "") {
  //
  const { setPageTitle } = useContext(PageTitleContext);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split("/").pop();
    const title = currentPath.charAt(0).toUpperCase() + currentPath.slice(1);

    setPageTitle(titleFromComponent ? titleFromComponent : title);
  }, [titleFromComponent, location.pathname, setPageTitle]);
}

export function useGetPageTitle() {
  const { pageTitle } = useContext(PageTitleContext);
  return pageTitle;
}
