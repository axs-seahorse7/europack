const teamMembers = [
  { name: "Alexandros Paraskevaidis", role: "Company CEO" },
  { name: "Giannis Christopoulos", role: "Sales Engineer" },
  { name: "Giorgos Flessas", role: "Sales Engineer" },
  { name: "Antonis Diamantopoulos", role: "Customer Service Specialist SIG" },

  { name: "Vasilis Petrongonas", role: "Technical Support Manager" },
  { name: "Markos Tzivaridis", role: "New Project Engineer" },
  { name: "Nikos Potiris", role: "Sales Engineer" },
  { name: "Konstantina Marinaki", role: "Sales & Project Administration" },

  { name: "Smaragda Getsopoulou", role: "Sales & Project Administration" },
  { name: "Chrysa Baka", role: "Sales & Project Administration" },
  { name: "Vasiliki Michopoulou", role: "Sales & Project Administration" },
  { name: "Eleni Golfi", role: "Sales & Project Administration" },

  { name: "Aliki Paraskevaidou", role: "Marketing Lead" },
  { name: "Vangelis Kiros", role: "Field Technician" },
  { name: "Apostolos Dimitropoulos", role: "Field Technician" },
  { name: "Dimitris Argiropoulos", role: "Field Technician" },

  { name: "Sotiris Siakaras", role: "Field Technician" },
  { name: "Τασόπουλος Παναγιώτης", role: "Field Technician" },
  { name: "Thomas Fakas", role: "Field Technician" },
  { name: "Masouros Akis", role: "Stomppy Sales" },
];

const OurTeamSection = () => {
  return (
    <section className="team-section">
      <div className="team-container">
        
        {/* Header */}
        <span className="team-pill">Our Team</span>
        <h2 className="team-title">
          Our people make <br /> Our Excellence
        </h2>

        {/* Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeamSection;
