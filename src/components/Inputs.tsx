import MyLocationTwoToneIcon from "@mui/icons-material/MyLocationTwoTone";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import Checkbox from "./Checkbox";

export default function Inputs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 mt-10 gap-2 text-sm">
      {/* Input 1 */}
      <div className="flex flex-col items-start md:col-span-3">
        <label htmlFor="location">Location</label>
        <div className="p-2 px-3 flex items-center space-x-2 border border-text/20 rounded-md w-full">
          <MyLocationTwoToneIcon className="text-redAccent w-5" />
          <input
            type="text"
            placeholder="Enter location name"
            className="bg-transparent placeholder:text-text/50 focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Input 2 */}
      <div className="flex mt-2 md:mt-7 justify-centers w-full space-x-2 md:col-span-2 h-full">
        <Checkbox />
        <label htmlFor="online">Online webinar</label>
      </div>

      {/* Input 3 */}
      <div className="flex flex-col items-start md:col-span-3">
        <label htmlFor="date">Date</label>
        <div className="p-2 px-3 flex items-center space-x-2 border border-text/20 rounded-md w-full">
          <TodayOutlinedIcon className="text-redAccent w-5" />
          <input
            type="text"
            placeholder="June 21, 2023"
            className="bg-transparent placeholder:text-text/50 focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Input 4 */}
      <div className="flex flex-col items-start md:col-span-2">
        <label htmlFor="time">Time</label>
        <div className="p-2 px-3 flex items-center space-x-2 border border-text/20 rounded-md w-full">
          <ScheduleOutlinedIcon className="text-redAccent w-5" />
          <input
            type="text"
            placeholder="9:00 AM"
            className="bg-transparent placeholder:text-text/50 focus:outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}
