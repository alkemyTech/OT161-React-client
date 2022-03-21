import React from "react";
import styles from "./Dashboard.module.css";
import { useHistory } from "react-router";
import PropTypes from "prop-types";

const CardDashboard = ({ title, icon, link }) => {
  const history = useHistory();

  CardDashboard.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string,
  };

  const linked = () => {
    history.push(link);
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

export default CardDashboard;
