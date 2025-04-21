import { TourResponseDTO } from '@/models/response/dashboard'
import { Accordion, AccordionItem } from '@heroui/accordion'
import { Avatar } from '@mui/material'
type Props = {
  tourDetail: TourResponseDTO
}
export const AccordionTourSchedule = ({ tourDetail }: Props) => {
  return (
    <div className="m-auto w-9/12 rounded-md bg-white">
      {tourDetail.tourDestinationResponses?.length != 0 && (
        <div>
          <h1 className="my-4 text-center text-3xl font-bold uppercase text-colorbrand-burntSienna-400">lịch trình</h1>
          <div className="my-4">
            <Accordion variant="splitted">
              {tourDetail?.tourDestinationResponses
                ? tourDetail?.tourDestinationResponses?.map((destination, index) => (
                    <AccordionItem
                      key={index}
                      className="mt-1 font-bold"
                      aria-label={`destination-${index}`}
                      startContent={<Avatar alt="Ảnh điểm đến" src={destination.image} />}
                      title={`Ngày ${index}: ${destination.name}` || `Địa điểm ${index + 1}`}
                    >
                      <h1 className="font-thin">{destination.description}</h1>
                    </AccordionItem>
                  ))
                : null}
            </Accordion>
          </div>
        </div>
      )}
    </div>
  )
}
