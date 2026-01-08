import Menu1Section from "./menu1section";
import Menu2Section from "./menu2section";
import SectionFooter from "./footerSecton";
import Menu3Section from "./menu3section";
import Menu4Section from "./menu4section";


export interface DashboardProps {}

export default function HomeScreen({}: DashboardProps) {
  return  (
    <div>
      <div className="flex flex-col flex-1">
      <Menu1Section />
      </div>
      <div className="flex flex-col flex-1">
      <Menu2Section />
      </div>
      <div className="flex flex-col flex-1">
      <Menu3Section />
      </div>
      <div className="flex flex-col flex-1">
      <Menu4Section />
      </div>
      <div className="flex flex-col flex-1">
      <SectionFooter/>
      </div>
    </div>
  );
 
}
