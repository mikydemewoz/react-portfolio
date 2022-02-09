import React, {useState} from 'react';
import axios from 'axios';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function submitMessage(){
    console.log(email,' ',name, ' ', message);
    try{
      let emailMessage = `<b> Email:</b>   ${email} \n\n <b>Name:</b>   ${name}\n\n <b>Message:</b>   ${message}`;
      emailMessage = encodeURIComponent(emailMessage)
      const response = await axios.get(
        `https://api.telegram.org/bot5116729626:AAFEmCPuy-5J8t55mITxs1CamwP69u-LojI/sendMessage?chat_id=379074126&text=${emailMessage}&parse_mode=html`
      )
      setName('');
      setEmail('');
      setMessage('');
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  return (
    <section className='my-0' id='contact'>
      <header className='px-5 text-2xl font-bold pt-10'>
        <h2>Contact Me</h2>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <p className='font-bold'>Michael Demewoz</p>
            <p className='font-thin'>Addis Ababa, Ethiopia</p>
            <a href='mailto: gdmichaeldemewoz@gmail.com' className='border-b-2 mt-3 inline-block border-gray-500'>
              gdmichaeldemewoz@gmail.com
            </a>
          </div>
          <a className='border-b-2 mt-3 inline-block border-gray-500' href='https://drive.google.com/file/d/1q-W16B785NIQiQ2thOiF36H6oRnNn8B7/view?usp=sharing' target='_blank' rel='noreferrer'>
            Resume
          </a>
          <div className='flex flex-row flex-wrap mt-7'>
            <div className='mr-4'>
              <a href='https://linkedin.com/in/michael-demewoz-331994191' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/linkedin.svg' alt='' width='24px' height='24px' className='mr-1' />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className='mr-4'>
              <a href='https://github.com/mikydemewoz' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm'>
                  <img src='./images/icons/github.svg' alt='' width='24px' height='24px' className='mr-1' />
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className='bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 '>
          <div className='flex flex-col space-y-3 m-auto w-full'>
            <input type='hidden' name='form-name' value='contact' />

            <label htmlFor='name'>Name</label>
            <input type='text' name='name' id='name' className='gradient' required value={name} onChange={(e) => setName(e.target.value)}></input>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' className='gradient' required value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' cols='25' rows='5' className='gradient' required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button 
            className='border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md'
            onClick={submitMessage}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className='relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm' onClick={() => window.scroll(0, 0)}>
        <picture>
          <source srcSet='./images/rocket-320.webp 320w, ./images/rocket.webp 768w' type='image/webp' />
          <source srcSet='./images/rocket.png' sizes='(min-width: 768px) 50vw, 100vw' type='image/png' />
          <img width='500px' height='500px' loading='lazy' alt='red rocket flying' />
        </picture>
      </div>
    </section>
  );
};

export default Contact;
