import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./astronaout.json'),
    });
    animate.setSpeed(0.8);
  }, []);

  return (
    <section className='my-12 px-5 md:my-20 flex flex-col flex-wrap space-y-12 md:space-y-0 patterns'>
      <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        <div className='container' ref={container}></div>
      </div>
      <div className='max-w-md mb-auto space-y-3 -mt-8'>
        <h1 className='text-5xl font-bold md:text-7xl'>ሰላም(Hello). I’m Michael</h1>
        <p className='tracking-wide leading-relaxed'>
        Do you have a problem to be solved in your mind? Did you somehow start and stacked ? Can it be solved with some software technology? This is Michael Demewoz, a Software engineer with a problem solving ability and more than 2 years experience in software development. I have started my own startups which are going great. You can check them below and give comments. Let’s grab a coffee and discuss. We will solve the problem and be good friends.
        </p>
      </div>
    </section>
  );
};

export default Hero;
