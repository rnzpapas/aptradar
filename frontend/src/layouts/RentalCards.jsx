import Text from "@/components/Text"

function RentalCards({cardImg, cardTitle, cardContract, cardStartDate, cardCloseDate}) {
  return (
    <section className="shadow-default h-[300px] w-full flex gap-5 p-4">
        {/* Image Section */}
        <section className="w-[50%] h-full flex items-center justify-center overflow-hidden">
            <img
            src={`/assets/listing/${cardImg}`}
            alt="unit-photo"
            className="w-full h-full object-cover"
            />
        </section>

        {/* Text Section */}
        <section className="p-4 flex flex-col justify-between w-[50%]">
            {/* Title */}
            <Text txtContent={cardTitle} txtStyles="font-semibold text-md xl:text-lg" />

            {/* Contract Info */}
            <section className="flex flex-col gap-2">
            <section className="flex gap-2">
                <Text txtContent="Contract Length:" txtStyles="font-semibold text-md" />
                <Text txtContent={cardContract} />
            </section>
            <section className="flex gap-2">
                <Text txtContent="Start Date:" txtStyles="font-semibold text-md" />
                <Text txtContent={cardStartDate} />
            </section>
            <section className="flex gap-2">
                <Text txtContent="Agreement Close Date:" txtStyles="font-semibold text-md" />
                <Text txtContent={cardCloseDate} />
            </section>
            </section>
        </section>
    </section>

  )
}

export default RentalCards