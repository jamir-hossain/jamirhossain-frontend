import { Button, Icon } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css'
import Title from '../Title/Title';

const Contact = () => {
   const [result, setResult] = useState()
   const [isSuccess, setIsSuccess] = useState(false)
   if (isSuccess) {
      setTimeout(() => setIsSuccess(false), 4000);
   }

   const { register, handleSubmit, watch, errors } = useForm();
   const onSubmit = (data, e) => {
      console.log(data)
      fetch('https://jamirhossain-backend.herokuapp.com/send-email', {
         method:'POST',
         headers:{
            'Content-Type':'application/json'
         },
         body:JSON.stringify({data})
      })
      .then(res => res.json())
      .then(data => {
         console.log(data)
         setResult(data)
         if (data) {
            setIsSuccess(true)
            e.target.reset()
         }
      })
   };

   const firstWord = 'Get In'
   const secondWord = 'Touch'
   const buttonText = 'Contact'

   return (
      <div className='container'>
          <Title 
            firstWord={firstWord}
            secondWord={secondWord}
            buttonText={buttonText}
         ></Title>
         <div className='row mt-3 pt-3 mb-5 pb-5'>
            <div className='col-1 col-sm-1 col-md-3'></div>
            <div className='card col-10 col-sm-10 col-md-6 CardBox cardBg cardStyle'>
               <h3 className='m-auto pb-3 text-white'>Contact With Me</h3>
               <form className='mt-3' onSubmit={handleSubmit(onSubmit)}>
                  <div className='form-group'>
                     <input 
                        className='form-control' 
                        placeholder='Your Name' 
                        name="name" 
                        ref={register({ required: true })}
                     />
                     {errors.name && <span className='text-danger'>Name is required</span>}
                  </div>

                  <div className='form-group'>
                     <input 
                        className='form-control' 
                        placeholder='Your Email' 
                        name="email" 
                        ref={register({ required: true })} 
                     />
                     {errors.email && <span className='text-danger'>Email is required</span>}
                  </div>

                  <div className='form-group'>
                     <input 
                        className='form-control' 
                        placeholder='Message Subject' 
                        name="subject" 
                        ref={register({ required: true })} 
                     />
                     {errors.subject && <span className='text-danger'>Subject is required</span>}
                  </div>

                  <div className='form-group'>
                     <textarea 
                        className='form-control' 
                        placeholder='Your Message' 
                        rows='4' 
                        name="text" 
                        ref={register({ required: true })} 
                     />
                     {errors.text && <span className='text-danger'>Message Body is required</span>}
                  </div>
                  
                  <div className='text-center submitBtn'>
                     {isSuccess &&
                        <p className={result.error ? "successMsg text-danger" : "successMsg text-success"}> 
                           {result.error ? result.error : result.success && result.success} 
                        </p>
                     }
                     <Button 
                        type="submit" 
                        className="button px-5" 
                        variant="contained" 
                        color="primary" 
                        endIcon={<Send/>}
                     >Send
                     </Button>
                  </div>
               </form>
               <div className="text-center">
                  <p className='text-white font-italic'>
                     Sending to <span style={{color:'#fff454', cursor:'pointer'}}>jomirhossain008@gmail.com</span>
                  </p>
               </div>
            </div>
            <div className='col-1 col-sm-1 col-md-3'></div>
         </div>
      </div>
   );
};

export default Contact;