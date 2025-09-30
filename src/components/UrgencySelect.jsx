import React from 'react';

export const UrgencySelect = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="baixa">Baixa - Posso aguardar</option>
      <option value="media">Média - Prefiro em breve</option>
      <option value="alta">Alta - Preciso urgentemente</option>
    </select>
  );
};