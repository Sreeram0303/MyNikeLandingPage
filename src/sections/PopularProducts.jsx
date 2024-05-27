import PopularProduct from "../Components/PopularProduct"
import {products} from "../constants"
const PopularProducts = () => {
  return (
     <section id="products" className="max-sm:mt-12 max-container">
      <div className=" flex flex-col gap-5 justify-start">
        <h2 className=" text-4xl font-bold font-palanquin ">Our
          <span className=" text-coral-red "> Popular</span> Products
        </h2>
        <p className=" font-montserrat mt-2 lg:max-w-lg text-slate-gray">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>

      <div className="grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProduct key={product.name} {...product} />
        ))}
      </div>
     </section>
  )
}

export default PopularProducts