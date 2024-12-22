import React from 'react';

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(40);

  return (
    <div className='bg-black/20 h-full'>
      <div className='h-full flex justify-center items-center p-4 bg-primary/10'>
        <div className='container grid grid-cols-1 gap-8'>
          {/* Lựa chọn nơi đến */}
          <div className='text-white'>
            <p data-aos='fade-up'>Lựa chọn điểm đến.</p>
            <p
              data-aos='fade-up'
              data-aos-delay='300'
              className='font-bold text-3xl'
            >
              Tìm kiếm điểm đến của bạn!
            </p>
          </div>

          {/* Form tìm kiếm */}
          <div
            data-aos='fade-up'
            data-aos-delay='600'
            className='space-y-4 bg-white rounded-md p-6 shadow-md relative'
          >
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
              <div>
                <label htmlFor='destination' className='opacity-70'>
                  Điểm đến.
                </label>
                <select
                  name='destination'
                  id='destination'
                  className='w-full bg-gray-100 accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2'
                >
                  <option value='HaNoi'>Hà Nội</option>
                  <option value='DaNang'>Đà Nẵng</option>
                  <option value='HoChiMinh'>Hồ Chí Minh</option>
                </select>
              </div>
              <div>
                <label htmlFor='date' className='opacity-70'>
                  Thời gian.
                </label>
                <input
                  type='datetime-local'
                  name='date'
                  id='date'
                  className='w-full bg-gray-100 rounded-full focus:outline-primary focus:outline outline-1 p-2'
                />
              </div>
              <div>
                <label htmlFor='price' className='opacity-70 block'>
                  <div className='w-full flex justify-between items-center'>
                    <p>Giá tour.</p>
                    <p className='font-bold text-xl'>{priceValue} VND.</p>
                  </div>
                </label>
                <input
                  type='number'
                  name='price'
                  id='price'
                  min='1000'
                  max='1000000'
                  step='10'
                  value={priceValue}
                  onChange={(e) => setPriceValue(Number(e.target.value))}
                  className='w-full bg-gray-100 rounded-full p-2 focus:outline-primary focus:outline outline-1'
                />
              </div>
            </div>

            {/* Nút tìm kiếm */}
            <button
              className='bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-6 py-3 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2'
            >
              Tìm kiếm
            </button>
          </div>

          {/* Bảng thanh toán */}
          <div
            data-aos='fade-up'
            data-aos-delay='900'
            className='space-y-4 bg-gray-200 rounded-lg p-4 shadow-lg border border-gray-300 relative mx-auto w-3/4 sm:w-2/4 mt-6'
          >
            <h3 className='text-lg font-semibold text-gray-800'>Thông tin thanh toán</h3>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
              <div>
                <label htmlFor='bank' className='opacity-70'>
                  Chọn ngân hàng.
                </label>
                <select
                  name='bank'
                  id='bank'
                  className='w-full bg-gray-100 rounded-md p-2 focus:outline-primary focus:outline outline-1'
                >
                  <option value='Vietcombank'>Vietcombank</option>
                  <option value='Techcombank'>Techcombank</option>
                  <option value='BIDV'>BIDV</option>
                  <option value='ACB'>ACB</option>
                </select>
              </div>
              <div>
                <label htmlFor='card' className='opacity-70'>
                  Nhập số thẻ.
                </label>
                <input
                  type='text'
                  name='card'
                  id='card'
                  placeholder='1234 5678 9101 1121'
                  className='w-full bg-gray-100 rounded-md p-2 focus:outline-primary focus:outline outline-1'
                />
              </div>
              <div>
                <label htmlFor='name' className='opacity-70'>
                  Tên chủ thẻ.
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Nguyễn Văn A'
                  className='w-full bg-gray-100 rounded-md p-2 focus:outline-primary focus:outline outline-1'
                />
              </div>
            </div>

            {/* Nút thanh toán */}
            <button
              className='bg-gradient-to-r from-secondary to-primary text-white hover:scale-105 px-4 py-2 text-sm rounded-md duration-200 absolute -bottom-4 left-1/2 -translate-x-1/2'
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
