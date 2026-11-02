import DashboardLayout from "@/layout/dashboerd-layout";
import LayananSec1 from "./section/layanansec1";
import ServiceLayout from "./component/serviceLayout";

export interface DashboardProps {}

export default function TentangKami({}: DashboardProps) {

  
    return (
      <DashboardLayout>
          <div>
              <div className="flex flex-col flex-1">
                <LayananSec1/>
              </div>
              <div className="flex flex-col flex-1">
                <ServiceLayout/>
              </div>
              <div className="flex flex-col flex-1">

              </div>
              <div className="flex flex-col flex-1">

              </div>
          </div>
      </DashboardLayout>
    );
  }
  