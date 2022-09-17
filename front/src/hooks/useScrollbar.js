import { useEffect } from "react"
import { OverlayScrollbars } from "overlayscrollbars";
const config ={}
const useScrollbar = (root,hasScroll)=>{
  useEffect(() => {
    let scrollbars;
    //console.log(root,root.current,hasScroll)
    if ((root.current, hasScroll)) {
      scrollbars= OverlayScrollbars(root.current, config);
    } 
    return ()=>{
      if (scrollbars) {
        scrollbars.destroy();
      }
    }
  }, [root, hasScroll]);
}
export {useScrollbar}