import "./App.css";
import Jobs from "./components/Job";
import Title from "./components/Title";

function App() {
  return (
    <>
      <header>
        <Title name="The Job Board" />
      </header>
      <section className="jobs">
        <Jobs
          className="red"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI -"
          country=" Australie -"
          city=" Sydney"
        />
        <Jobs
          className="green"
          title="Agent de Sécurité - Pantin"
          contractType="CDI -"
          country=" France -"
          city=" Plantin"
        />
        <Jobs
          className="yellow"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD -"
          country=" France -"
          city=" Paris"
        />

        <Jobs
          className="blue"
          title="Chef de Projets"
          contractType="CDD -"
          country=" France -"
          city=" Paris"
        />
        <Jobs
          className="beige"
          title="Développeur React.js"
          contractType="CDI -"
          country=" France -"
          city=" Paris"
        />
        <Jobs
          className="red"
          title="Sales Associate Stockholm"
          contractType="CDI -"
          country=" Suède -"
          city=" Stockholm"
        />
        <Jobs
          className="green"
          title="Vendeur/se - Crans Montana"
          contractType="CDI -"
          country=" Suisse -"
          city=" Crans-Montana"
        />
        <Jobs
          className="yellow"
          title="CRM & Data Quality Analyst"
          contractType="CDI -"
          country=" USA -"
          city=" New York"
        />
        <Jobs
          className="blue"
          title="Infirmier (H/F)"
          contractType="CDI -"
          country=" France -"
          city=" Pantin"
        />
      </section>
    </>
  );
}

export default App;
