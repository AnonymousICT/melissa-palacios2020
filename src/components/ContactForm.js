import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm () {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <div className='form-container'>
        <h2 className='section__title'>Contact Me</h2>
        <form className='commission-form' onSubmit={handleSubmit(onSubmit)}>
            <textarea name="Description" placeholder="A brief description of what you want. Examples: Would you be able to design a logo for my youtube channel? Can you draw icons for my twich subs? I have the right to refuse any requests." ref={register({required: true})} />
            <input type="text" placeholder="Your Name" name="Your Name" ref={register({required: true})} />
            <input type="text" placeholder="Your Email" name="Your Email" ref={register({required: true})} />

            <input className='commission-form__button btn' type="submit" />
        </form>
    </div>
  );
}