import React from 'react';

export const PsychologistSelect = ({ value, onChange, psychologists }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    >
      <option value="">Selecione um psicólogo</option>
      {psychologists.map((psych) => (
        <option key={psych.id} value={psych.id}>
          {psych.name} - {psych.specialty}
        </option>
      ))}
    </select>
  );
};