import { Hero, SearchBar, CustomFilter, CarCard } from '@/components'
import { fetchCars } from '@/utils'
import Image from 'next/image'



export default async function Home() {

  const allCars = await fetchCars();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
 
  return (
    <main className="overflow-hidden">
      {/* hero section */}
      <Hero />
      {/* car catalogue */}
      <div className="mt-5 padding-x padding-y max-width" id="discover">
        {/* title section */}
        <div className="home__text-container">
          <h1 className='text-3xl font-extrabold uppercase'>Car Catalogue</h1>
          <p>Explore the cars you like</p>
        </div>
        {/* filter section */}
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel"/>
            <CustomFilter title="year"/>
          </div>
        </div>

        {/* car display */}
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
              <CarCard  car={car}/>)
              )}
            </div>
          </section>
        ): (<div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Ooops, no results</h2>
          <p>{allCars?.message}</p>
        </div>)
        }
      </div>
    </main>
  )
}
