import DashboardLayout from "@/layout/dashboerd-layout";
import LayananSec1 from "./section/layanansec1";
import ServiceLayout from "./component/serviceLayout";

export interface DashboardProps {}

export default function TentangKami({}: DashboardProps) {

    return (
      <DashboardLayout>
          <div className="flex flex-col">
            <LayananSec1/>
            <ServiceLayout/>
          </div>
      </DashboardLayout>
    );
  }
