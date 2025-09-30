import React from 'react';

export const DescriptionTextarea = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows={4}
      placeholder="Ex: Gostaria de ser seu paciente. Preciso de ajuda com ansiedade..."
      required
    />
  );
};
