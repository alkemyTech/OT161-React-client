import React from "react";
import CardDashboard from "./CardDashboard";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const cards = [
    {
      icon: "fa-solid fa-laptop",
      title: "Novedades",
      link: "/create-news",
    },
    {
      icon: "fa-solid fa-list-check",
      title: "Actividades",
      link: "/create-activity",
    },
    {
      icon: "fa-solid fa-list-ul",
      title: "Categorias",
      link: "/create-category",
    },
    {
      icon: "fa-solid fa-comments",
      title: "Testimonios",
      link: "/create-testimonials",
    },
    {
      icon: "fa-solid fa-sitemap",
      title: "Organización",
      link: "/create-project",
    },
    {
      icon: "fa-solid fa-photo-film",
      title: "Slides",
      link: "/backoffice/create-slide",
    },
    {
      icon: "fa-solid fa-users",
      title: "Usuarios",
      link: "/create-user",
    },
    {
      icon: "fa-solid fa-people-group",
      title: "Miembros",
      link: "/create-member",
    },
  ];

  return (
    <div className={styles.containerDashboard}>
      {cards.map((e) => {
        return (
          <CardDashboard
            key={e.title}
            icon={e.icon}
            title={e.title}
            link={e.link}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
