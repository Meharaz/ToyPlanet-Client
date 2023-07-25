

const ExtraSection = () => {
    return (
        <div className='flex justify-center p-4  m-4 border rounded-xl shadow-2xl'>
            <div className='w-1/2  l shadow-2x border rounded-2xl'>
                <img className='w-full h-full rounded-2xl shadow-2xl ' src="https://i.ibb.co/3Cr2K1D/download.jpg" alt="" />
            </div>
            <div className='flex flex-col justify-items-center w-1/2  pl-4 '>
                <div className='h-2/4'>
                <img className='w-full h-full rounded-2xl border-red-300 border mb-2 shadow-2xl' src="https://i.ibb.co/tXcpF04/download.jpg" alt="" />
                </div>
                <div  className='h-2/4 mb-2'>
                <img className='w-full h-full rounded-2xl  border mt-2  shadow-xl' src="https://i.ibb.co/8YG0L2X/download.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;