import React from 'react';

const ValueProp = () => {
  return (
    <section className="py-24 bg-background flex items-center justify-center text-center px-4">
      <div className="max-w-5xl">
        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-8">
          "This isn’t a chatbot. <br/>
          This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">you</span>, operationalized."
        </h2>
        <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
          Stop losing hours to repetitive client queries. Clone your professional persona and let Veritas handle the intake, scheduling, and basic advisory—while you focus on the courtroom.
        </p>
      </div>
    </section>
  );
};

export default ValueProp;
