import React from 'react';
import { Json } from '@/integrations/supabase/types';
import { isKPI } from '@/hooks/useProjectMetrics';

interface KPIListProps {
  kpis: Json[];
}

const KPIList = ({ kpis }: KPIListProps) => {
  if (!Array.isArray(kpis) || kpis.length === 0) return null;

  return (
    <>
      {kpis.filter(isKPI).map((kpi, index) => (
        <div key={index}>
          <h3 className="font-bold mb-3">Highlighted KPI</h3>
          <ul className="space-y-2 text-gray-600">
            <li>{kpi.value}</li>
            <li>{kpi.label}</li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default KPIList;