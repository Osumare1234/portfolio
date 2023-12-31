"use Server";

import { validateString, getErrorMessage } from "@/lib/utils";
import React from "react";

import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
const resend = new Resend("process.env.RESEND_API_KEY");


  export const sendEmail = async(FormData: FormData) => {
  const senderEmail = FormData.get('senderEmail')
  const message = FormData.get('message');


  //simple server-side validation

  if (!validateString(senderEmail, 500)) {
    return{
      error:"Invalid message email" 
    }
  }
  if(!validateString(message, 5000)) {
    return {
      error: "Invalid message"
    }
  }
  new Error('message')
  let data;
 
  try {
    data=await resend.emails.send({
      from:'Contact Form <onboarding@resend.dev>',
      to:'emmanuelbanky16@gmail.com',
      subject:'Message from contact form',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail:senderEmail as string,
      })
      
    
    });
  } catch(error: unknown) {
   
    return {
      error: getErrorMessage(error)
    }
   
    }
    return{
      data,
    }
}
 
  