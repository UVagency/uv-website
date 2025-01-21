import React from 'react';
import { Json } from '@/integrations/supabase/types';
import { isKPI, KPI } from '@/hooks/useProjectMetrics';

interface KPIListProps {
  kpis: Json;
}

const KPIList = ({ kpis }: KPIListProps) => {
  // Ensure kpis is an array and contains valid KPI objects
  const validKpis = Array.isArray(kpis) ? kpis.filter(isKPI) : [];

  if (validKpis.length === 0) return null;

  return (
    <div>
      <h3 className="font-bold mb-3">KPIs</h3>
      <ul className="space-y-2 text-gray-600">
        {validKpis.map((kpi, index) => {
          const typedKpi = kpi as KPI;
          return (
            <li key={index}>
              <span className="font-medium">{typedKpi.label}:</span> {typedKpi.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default KPIList;