import React from "react";

const EmbededSection = () => {
  return (
    <section id="embeded" className="embeded">
      <div className="container">
        <iframe
          src="https://app.mindsmith.ai/learn/clwuo5vbc005uif3m04a993cp"
          style={{
            height: "700px",
            width: "1200px",
            maxHeight: "100%",
            maxWidth: "100%",
            border: "none",
          }}
          allow="fullscreen"
          title="Building a Better Physique: Targeted Workouts for Each Body Part"
        ></iframe>
      </div>
    </section>
  );
};

export default EmbededSection;
