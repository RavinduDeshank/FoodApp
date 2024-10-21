import Styles from "./innerComponent.module.css"
export default function InnerComponent({ children }) {
  return <div className={Styles.innerComponent}>{children}</div>;
}
