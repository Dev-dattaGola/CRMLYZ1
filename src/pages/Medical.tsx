
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/layout/PageLayout';
import MedicalDashboard from '@/components/medical/MedicalDashboard';

const Medical: React.FC = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Medical Management - Law EMR</title>
      </Helmet>
      <div className="container mx-auto py-6">
        <MedicalDashboard />
      </div>
    </PageLayout>
  );
};

export default Medical;
