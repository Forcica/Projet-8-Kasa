import React from "react";
import { DescriptionPanel } from "../../components/DescriptionPanel/DescriptionPanel";
import { ImageBanner } from "../../components/ImageBanner/ImageBanner";

function About() {
  return (
    <>
      <ImageBanner /> {/* Affiche un carrousel d'images, ici sans images spécifiées */}
      <div className="about__container">
        {/* Chaque DescriptionPanel affiche un panneau avec un titre et un contenu */}
        <DescriptionPanel title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
        <DescriptionPanel title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <DescriptionPanel title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme." />
        <DescriptionPanel title="Responsabilité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement aux critères de sécurité établis par nos services. En Laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
    </>
  );
}

export default About;
