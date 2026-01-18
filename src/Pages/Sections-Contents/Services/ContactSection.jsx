const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-overlay">
        <div className="contact-content">

          {/* LEFT CONTENT */}
          <div className="contact-left">
            <h2>Τομέας Δραστηριότητας</h2>
            <p>Contact us!</p>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-right">
            <form className="contact-form">

              <div className="form-row ">
                <div className="form-group">
                  <label>Name*</label>
                  <input type="text" placeholder="Daniel Scoot" />
                </div>
                <div className="form-group">
                  <label>Email*</label>
                  <input type="email" placeholder="infoexample@gmail.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Company*</label>
                  <input type="text" placeholder="Consult Pro" />
                </div>
                <div className="form-group">
                  <label>Consulting Area*</label>
                  <input type="text" placeholder="Consult Pro" />
                </div>
              </div>

              <div className="form-group">
                <label>Telephone*</label>
                <input type="text" placeholder="+30 2102830262" />
              </div>

              <div className="form-group">
                <label>Write us your message*</label>
                <textarea rows="5" />
              </div>

              <div className="form-checkbox">
                <input type="checkbox" />
                <span>
                  Παρακαλώ να αποθηκευτούν το όνομα και η διεύθυνση ηλ.
                  ταχυδρομείου για την επόμενη επικοινωνία μου με την Europack I.S.
                </span>
              </div>

              <button type="submit" className="submit-btn">
                Submit ↗
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
