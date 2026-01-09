export default function Section({
  color,
  bgImage,
  children,
}) {
  return (
    <section
      className="section"
      style={{
        height: "100vh",

        /* background handling */
        backgroundColor: color,
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        fontSize: "3rem",
      }}
    >
      {children}
    </section>
  );
}
