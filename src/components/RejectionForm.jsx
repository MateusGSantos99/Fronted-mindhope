import { useState } from 'react';
import { Button } from './Button';
import { X } from 'lucide-react';

export const RejectionForm = ({
  requestId,
  onCancel,
  onSubmit,
  loading
}) => {
  const [rejectionReason, setRejectionReason] = useState('');
  const [customReason, setCustomReason] = useState('');

  const handleSubmit = () => {
    const reason =
      rejectionReason === 'Outro' ? customReason : rejectionReason;

    if (!reason.trim()) {
      alert('Por favor, selecione ou digite um motivo válido.');
      return;
    }

    onSubmit(requestId, reason);
  };

  return (
    <div className="flex flex-col gap-2 flex-1">
     <select
  className="p-2 rounded border bg-gray-800 text-white appearance-none"
  value={rejectionReason}
  onChange={(e) => setRejectionReason(e.target.value)}
>
  <option value="" disabled hidden>Selecione um motivo</option>
  <option value="Problemas com horário">Problemas com horário</option>
  <option value="Agenda cheia">Agenda cheia</option>
  <option value="Outro">Outro</option>
</select>

      {rejectionReason === 'Outro' && (
        <input
          type="text"
          placeholder="Descreva o motivo..."
          className="p-2 rounded border text-white"
          value={customReason}
          onChange={(e) => setCustomReason(e.target.value)}
        />
      )}

      <div className="flex gap-2">
        <Button
          variant="secondary"
          onClick={handleSubmit}
          loading={loading}
          className="flex-1 flex items-center justify-center gap-2"
        >
          <X className="w-4 h-4" />
          Confirmar Rejeição
        </Button>

        <Button
          variant="ghost"
          onClick={onCancel}
          className="flex-1 flex items-center justify-center gap-2 text-white"
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
};
