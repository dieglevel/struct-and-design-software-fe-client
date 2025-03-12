import { Button, Input } from "@/components/ui";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar, CalendarIcon } from "lucide-react";
import { cn } from "@/utils";

export const SearchComponent = () => {
  return (
    <section className="transform -translate-y-1/2 px-4 z-20 bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg w-3/4 relative ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Departure */}
        <div className="space-y-2">
          <label className="text-base font-bold text-[#00315C]">
            Khởi hành từ
          </label>
          <Input placeholder="Nhập địa điểm..." />
        </div>

        {/* Destination */}
        <div className="space-y-2">
          <label className="text-base font-bold text-[#00315C]">Điểm đến</label>
          <Input placeholder="Bạn muốn đi đâu?" />
        </div>

        {/* Start Date */}
        <div className="space-y-2">
          <label className="text-base font-bold text-[#00315C]">Ngày đi</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" />
            </PopoverContent>
          </Popover>
        </div>

        {/* End Date */}
        <div className="space-y-2">
          <label className="text-base font-bold text-[#00315C]">Ngày về</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" />
            </PopoverContent>
          </Popover>
        </div>

        <div className="mt-6 flex justify-center">
          <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white px-8 font-bold">
            Tìm kiếm
          </Button>
        </div>
      </div>

      {/* Search Button */}
    </section>
  );
};
