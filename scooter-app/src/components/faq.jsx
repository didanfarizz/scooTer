import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import PropTypes from 'prop-types';

function Icon({ id, open }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

Icon.propTypes = {
  // Add prop type validation
  id: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired,
};

const FaqPage = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
      <div className="bg-[#000000] lg:p-24">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:pt-0 py-8 px-4 lg:px-0">
          <div className="lg:w-1/2 text-center lg:text-start lg:py-0 py-6">
            <p className="text-[#fefefe] lg:text-6xl text-4xl font-bold">FAQ</p>
            <p className="text-[#fefefe] text-lg font-semibold">Berkendara Nyaman, Tanpa Keraguan - Temukan Jawabannya di Sini</p>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-2 lg:gap-7">
            <Accordion className='w-full bg-[#e5e5e5] lg:px-5 lg:py-2 lg:rounded-[15px] rounded-[3px]' open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader className='lg:p-0 p-5' onClick={() => handleOpen(1)}>
                {' '}
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='lg:text-lg text-sm'>Bagaimana cara kerja layanan ini?</p>
              </AccordionHeader>
              <AccordionBody className='lg:py-2 lg:px-0 p-5'>
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='lg:text-md text-[#000000]'>Cara kerja layanan scooTer ini hanya bisa diakses melalui website saja untuk saat ini.</p>
              </AccordionBody>
            </Accordion>
            <Accordion className='w-full bg-[#e5e5e5] lg:px-5 lg:py-2 lg:rounded-[15px] rounded-[3px]' open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader className='lg:p-0 p-5' onClick={() => handleOpen(2)}>
                {' '}
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='lg:text-lg text-sm'>Di mana saya bisa menggunakan scooter ini?</p>
              </AccordionHeader>
              <AccordionBody className='lg:py-2 lg:px-0 p-5'>
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='lg:text-md text-[#000000]'>Anda akan menemukan scooTer ini hanya ada di wilayah Tangerang saja.</p>
              </AccordionBody>
            </Accordion>
            <Accordion className='w-full bg-[#e5e5e5] lg:px-5 lg:py-2 lg:rounded-[15px] rounded-[3px]' open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader className='lg:p-0 p-5' onClick={() => handleOpen(3)}>
                {' '}
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='lg:text-lg text-sm'>Apa saja metode pembayaran yang tersedia?</p>
              </AccordionHeader>
              <AccordionBody className='lg:py-2 lg:px-0 p-5'>
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='lg:text-md text-[#000000]'>Metode pembayaran yang tersedia untuk rental scooTer ini menggunakan e-wallet (ovo, dana, gopay) dan Qris.</p>
              </AccordionBody>
            </Accordion>
            <Accordion className='w-full bg-[#e5e5e5] lg:px-5 lg:py-2 lg:rounded-[15px] rounded-[3px]' open={open === 4} icon={<Icon id={4} open={open} />}>
              <AccordionHeader className='lg:p-0 p-5' onClick={() => handleOpen(4)}>
                {' '}
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='lg:text-lg text-sm'>Bagaimana cara mengaktifkan scooter?</p>
              </AccordionHeader>
              <AccordionBody className='lg:py-2 lg:px-0 p-5'>
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='lg:text-md text-[#000000]'>Cara mengaktifkan scooTer hanya dengan memasukkan kode akses atau OTP yang dikirimkan melalui Email Anda ke scooTer yang akan dipilih.</p>
              </AccordionBody>
            </Accordion>
            <Accordion className='w-full bg-[#e5e5e5] lg:px-5 lg:py-2 lg:rounded-[15px] rounded-[3px]' open={open === 5} icon={<Icon id={5} open={open} />}>
              <AccordionHeader className='lg:p-0 p-5' onClick={() => handleOpen(5)}>
                {' '}
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='lg:text-lg text-sm'>Bagaimana cara melaporkan masalah teknis pada scooter?</p>
              </AccordionHeader>
              <AccordionBody className='lg:py-2 lg:px-0 p-5'>
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='lg:text-md text-[#000000]'>Jika mengalami kendala teknis, anda cukup melaporkan contact yang tertera di website scooTer.</p>
              </AccordionBody>
            </Accordion>
            <Accordion className='w-full bg-[#e5e5e5] lg:px-5 lg:py-2 lg:rounded-[15px] rounded-[3px]' open={open === 6} icon={<Icon id={6} open={open} />}>
              <AccordionHeader className='lg:p-0 p-5' onClick={() => handleOpen(6)}>
                {' '}
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='lg:text-lg text-sm'>Apakah data saya aman di sistem ini?</p>
              </AccordionHeader>
              <AccordionBody className='lg:py-2 lg:px-0 p-5'>
                <p style={{ fontFamily: 'Montserrat, sans-serif' }} className='lg:text-md text-[#000000]'>Data yang Anda kirimkan Ketika login, akan aman dan tidak akan disebarluaskan.</p>
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
