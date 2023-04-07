import React from "react";
import {navigateToUrl} from "single-spa"

interface IPropsNavigate {
  path: string;
  children?: React.ReactNode;
}

export const Navigate: React.FC<IPropsNavigate> = (props: IPropsNavigate) => {
  
  const redirect = (e: React.MouseEvent<HTMLButtonElement>) => {
    // analythics should be here 
    navigateToUrl(e.currentTarget.name);
  }

  return (
    <button aria-label={`Go to page ${props.children}`} type="button" name={props.path} onClick={redirect} style={{cursor: "pointer", background: 'green', color: "white", padding: "20px 40px", border: "none"}}>{props.children}</button>
  )
}