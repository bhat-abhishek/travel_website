import React,{useState} from 'react'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const goToPrev = ()=>{
        const isLastSlide = currentIndex === 0;
        const newIndex = isLastSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = ()=>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };

  return (
    <div className='w-full h-full relative'>
        <div onClick={goToPrev} className="absolute top-1/2 translate-x-0 translate-y-1/2 left-2 text-white text-2xl cursor-pointer z-50">
          ❰
        </div>
        <div onClick={goToNext} className="absolute top-1/2 translate-x-0 translate-y-1/2 right-2 text-white text-2xl cursor-pointer z-50">
          ❱
        </div>
        <div  className={`flex items-end justify-center w-full h-full rounded-md shadow-lg bg-cover bg-no-repeat`} style={{backgroundImage:`url(${slides[currentIndex].url})` }} >
            <h3 className=' bg-slate-400 px-5 py-1 rounded-sm text-white text-center'>{slides[currentIndex].place}</h3>
        </div>
        <div className='flex justify-center items-center space-x-4 text-xl'>
        {slides.map((slide, slideIndex) => (
          <div className='flex justify-center items-center mt-2'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider