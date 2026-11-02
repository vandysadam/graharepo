import DashboardLayout from "@/layout/dashboerd-layout";
import AboutSec1 from "./section/section-1";
import AboutSec2 from "./section/section-2";
import AboutSec3 from "./section/section-3";
import AboutSec4 from "./section/section4";

export interface DashboardProps {}

export default function TentangKami({}: DashboardProps) {

  
    return (
      <DashboardLayout>
          <div>
              <div className="flex flex-col flex-1">
                <AboutSec1/>
              </div>
              <div className="flex flex-col flex-1">
                <AboutSec2/>
              </div>
              <div className="flex flex-col flex-1">
                <AboutSec3/>
              </div>
              <div className="flex flex-col flex-1">
                <AboutSec4/>
              </div>
          </div>
       </DashboardLayout>
    );
  }
  