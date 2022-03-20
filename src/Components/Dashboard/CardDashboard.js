import React from "react";
import styles from "./Dashboard.module.css";
import { useHistory } from "react-router";

const CardDashboard = ({ title, icon, link }) => {
  const history = useHistory();

  const linked = () => {
    history.push(`${link}`);
  };

  return (
    <div className={styles.containerCard}>
      <h3 className={styles.title}>{title}</h3>
      <i
        className={icon}
        style={{
          width: "100px",
          height: "auto",
          padding: "10px",
        }}
      ></i>
      <button onClick={linked} className={styles.btn}>
        Ir
      </button>
    </div>
  );
};
// Para evitar los errores de consola por las props, en las reglas de configuaración de ESLint:
// "rules": {
//     "react/prop-types": "off"
//   }

export default CardDashboard;
