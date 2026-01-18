import { useState } from "react";

const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleService = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const servicesData = [
  {
    title: "DESIGN & ENGINEERING ASSESSMENT",
    content: `
    Europack offers comprehensive production space design solutions
    and packaging and inspection line studies, ensuring ergonomics,
    efficiency, and compliance with modern requirements. From
    selecting the right equipment to optimising facility layout, we
    provide specialised recommendations for optimal performance.
        `,
    },
    {
        title: "SPARE PARTS & TECHNICAL SUPPORT",
        content: `
    Europack provides organised handling of spare parts management
    and technical support to ensure your machinery’s smooth
    operation. We monitor the needs of each installation and
    guarantee the immediate availability of critical components.

    Additionally, we offer high-level technical support for packaging
    equipment from leading manufacturers such as SIG Group, CEIA,
    Ishida, Endoline, and Probat. With experienced technicians and
    continuous investment in training, we ensure prompt and reliable
    service.
        `,
    },
    {
        title: "PERIODIC INSPECTION & MAINTENANCE",
        content: `
    We provide regular inspection and maintenance services with a
    strong focus on metal detectors and X-rays. Our services ensure
    continuous compliance with quality standards and include
    certification essential for audits and regulatory inspections,
    guaranteeing the reliability of your production process.
        `,
    },
    {
        title: "INNOVATION & UPGRADES",
        content: `
    Μέσα από στοχευμένες επισκέψεις σε διεθνείς εκθέσεις, η
    Europack I.S. φροντίζει για τη συνεχή ενημέρωση των πελατών της
    σχετικά με τις τελευταίες εξελίξεις στη βιομηχανία.

    Παράλληλα, οργανώνουμε επισκέψεις σε κατασκευαστικούς οίκους
    για hands-on εμπειρία και εκπαίδευση, εξασφαλίζοντας την ομαλή
    ενσωμάτωση νέων τεχνολογιών στην ελληνική αγορά.

    Ενσωματώνοντας τις τελευταίες τεχνολογικές εξελίξεις, η
    Europack I.S. αναβαθμίζει τον υπάρχοντα εξοπλισμό σας για
    αυξημένη απόδοση και συμμόρφωση με νέες απαιτήσεις.

    Εξασφαλίζουμε τη μακροχρόνια βιωσιμότητα και
    ανταγωνιστικότητα των μηχανημάτων σας.
        `,
    },
    ];


  return (
    <section className="services-section">
      <div className="services-container">

        {/* LEFT IMAGE */}
        <div className="services-image h-[90vh] w-[35vw] ">
          <img
            src="/images/div_col_lg_3_margin.webp"
            alt="Services"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="services-content w-full">
          <h2 className="services-title">Services</h2>

          <div className="services-accordion">
            {servicesData.map((item, index) => {
              const isOpen = index === activeIndex;

              return (
                <div key={index} className="service-block">
                  {/* HEADER */}
                  <button
                    className={`service-header ${isOpen ? "active" : ""}`}
                    onClick={() => toggleService(index)}
                  >
                    <span>{item.title}</span>
                    <span className={`arrow ${isOpen ? "rotate" : ""}`}>↓</span>
                  </button>

                  {/* CONTENT */}
                  <div
                    className="service-content-inner"
                    style={{
                      maxHeight: isOpen ? "520px" : "0px",
                    }}
                  >
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
