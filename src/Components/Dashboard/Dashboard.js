import React from "react";
import CardDashboard from "./CardDashboard";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.containerDashboard}>
      <CardDashboard
        icon="fa-solid fa-laptop"
        title="Novedades"
        link="/create-news"
      />
      <CardDashboard
        icon="fa-solid fa-list-check"
        title="Actividades"
        link="/create-activity"
      />
      <CardDashboard
        icon="fa-solid fa-list-ul"
        title="Categorias"
        link="/create-category"
      />
      <CardDashboard
        icon="fa-solid fa-comments"
        title="Testimonios"
        link="/create-testimonials"
      />
      <CardDashboard
        icon="fa-solid fa-sitemap"
        title="Organización"
        link="/create-project"
      />
      <CardDashboard
        icon="fa-solid fa-photo-film"
        title="Slides"
        link="/backoffice/create-slide"
      />
      <CardDashboard
        icon="fa-solid fa-users"
        title="Usuarios"
        link="/create-user"
      />
      <CardDashboard
        icon="fa-solid fa-people-group"
        title="Miembros"
        link="/create-member"
      />
    </div>
  );
};

export default Dashboard;
