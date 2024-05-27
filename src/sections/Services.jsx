import ServiceCard from "../Components/ServiceCard"
import {services} from "../constants"
const Services = () => {
  return (
    <section id="services"
    className="flex flex-wrap gap-9 max-container justify-center">
      {services.map((service) =>(
        <ServiceCard key={service.label} {...service}/>
      ))}

    </section>
  )
}

export default Services