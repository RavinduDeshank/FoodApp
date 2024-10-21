import Styles from "./container.module.css";
export default function Container({ children }) {
  return <div className={Styles.parentComponents}>{children}</div>;
}
