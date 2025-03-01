import { ThreeDCard } from '@/globalComponent/ThreeDCard';
import RadialChart from "@/globalComponent/charts/RadialChart";
import ColumnChart from "@/globalComponent/charts/ColumnChart";
import SingleLineChart from "@/globalComponent/charts/SingleLineChart";
import Tabs from "@/globalComponent/shadCnTabs/Tabs";
import AssignUnassign from "@/globalComponent/modal/AssignUnassign";


export default function Home() {
  return (
    <>
    <h1 className="text-[30px] font-[600] text-[red] my-2 text-center">My First Repo</h1>
    <div className="bg-green-700 p-8">
      <h1 className="font-[600] text-[30px]  bg-white  text-center">This is div</h1>
      <div className="flex gap-4 my-6 justify-evenly">
        <RadialChart />
        <RadialChart />
        <RadialChart />
      </div>
      <h1 className="text-[35px] text-center text-white font-[600] my-6">Admin Dashboard Charts</h1>
      <div className="grid grid-cols-3 gap-4 my-6">
        <div className="col-span-2"><ColumnChart /></div>
        <div><RadialChart /></div>
      </div>
      <SingleLineChart/>

      <ThreeDCard />
      <Tabs/>
      <AssignUnassign/>
    </div>
    </>
  );
}
