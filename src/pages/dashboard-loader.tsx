import { Progress } from '@/components/ui/react-progress';
import DashboardLayout from '@/layout/dashboerd-layout';
import React from 'react';

const DashboardLoaderPage: React.FC = () => {

  const [progress, setProgress] = React.useState(13)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <DashboardLayout>
{/*       
      <span className="flex flex-row items-center justify-center">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </span> */}

<Progress value={progress} className="w-[60%]" />
    </DashboardLayout>
  );
};

export default DashboardLoaderPage;